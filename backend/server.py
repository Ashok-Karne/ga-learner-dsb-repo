from fastapi import FastAPI, APIRouter, HTTPException, Depends, Header
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from typing import List, Optional
from models import (
    Product, ProductCreate, CompanyInfo, Inquiry, InquiryCreate,
    Category, CategoryCreate, AdminLogin, AdminCreate, Stats
)
from auth import verify_password, get_password_hash, create_access_token, verify_token

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Security
security = HTTPBearer()

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Dependency to verify admin token
async def get_current_admin(credentials: HTTPAuthorizationCredentials = Depends(security)):
    token = credentials.credentials
    username = verify_token(token)
    if username is None:
        raise HTTPException(status_code=401, detail="Invalid authentication credentials")
    admin = await db.admins.find_one({"username": username})
    if not admin:
        raise HTTPException(status_code=401, detail="Admin not found")
    return username

# Initialize default data
async def init_data():
    # Check if admin exists, if not create default admin
    admin_count = await db.admins.count_documents({})
    if admin_count == 0:
        default_admin = {
            "username": "admin",
            "password": get_password_hash("admin123")
        }
        await db.admins.insert_one(default_admin)
        logger.info("Created default admin: username=admin, password=admin123")
    
    # Check if company info exists
    company_count = await db.company_info.count_documents({})
    if company_count == 0:
        default_company = {
            "name": "Maitreyee Hydro Systems",
            "tagline": "Your Trusted Partner in Hydro Solutions Since 2006",
            "description": "We are a highly popular organization engaged in manufacturing and trading a wide range of premium quality hydro systems including Steam Bath Generators, Sauna Bath Systems, Swimming Pool Equipment, and Hydro Pneumatic Pumps.",
            "yearEstablished": "2006",
            "natureOfBusiness": "Manufacturer",
            "legalStatus": "Proprietorship",
            "annualTurnover": "₹40 Lakh",
            "gstNo": "27ACJPK5215E1ZT",
            "gstRegistrationDate": "01-07-2017",
            "email": "info@maitreyeehydro.com",
            "phone": "+91-8046077653",
            "address": "Unit No. 345, B Wing, Orchard Road Mall, Royal Palms, Aarey Milk Colony, Goregaon East, Mumbai - 400065, Maharashtra, India",
            "ceo": "Ashok Karne"
        }
        await db.company_info.insert_one(default_company)
        logger.info("Created default company info")
    
    # Check if categories exist
    category_count = await db.categories.count_documents({})
    if category_count == 0:
        default_categories = [
            {"id": 1, "name": "All Products", "slug": "all"},
            {"id": 2, "name": "Steam Bath Systems", "slug": "steam-bath"},
            {"id": 3, "name": "Sauna Bath Systems", "slug": "sauna-bath"},
            {"id": 4, "name": "Swimming Pool Equipment", "slug": "swimming-pool"},
            {"id": 5, "name": "Booster Pumps", "slug": "booster-pumps"},
            {"id": 6, "name": "Hydro Pneumatic Systems", "slug": "hydro-pneumatic"}
        ]
        await db.categories.insert_many(default_categories)
        logger.info("Created default categories")
    
    # Check if products exist
    product_count = await db.products.count_documents({})
    if product_count == 0:
        default_products = [
            {
                "id": "1",
                "name": "Swimming Pool Cleaners",
                "category": "swimming-pool",
                "price": 7000,
                "priceUnit": "Piece",
                "image": "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=500&q=80",
                "description": "High-quality pool cleaning equipment for efficient maintenance. Automatic suction-based cleaning system for residential and commercial pools.",
                "features": ["Automatic cleaning", "Energy efficient", "Durable construction", "Easy maintenance"]
            },
            {
                "id": "2",
                "name": "Pressure Booster Pump",
                "category": "booster-pumps",
                "price": 12000,
                "priceUnit": "Piece",
                "image": "https://images.unsplash.com/photo-1581092918484-8313e1b2524e?w=500&q=80",
                "description": "Reliable pressure booster pump for domestic and commercial applications. Ensures consistent water pressure throughout your building.",
                "features": ["High pressure output", "Silent operation", "Long lifespan", "Low power consumption"]
            },
            {
                "id": "3",
                "name": "Steam Bath Panel",
                "category": "steam-bath",
                "price": 15000,
                "priceUnit": "Piece",
                "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500&q=80",
                "description": "Advanced digital control panel for steam bath systems with temperature and time controls.",
                "features": ["Digital display", "Temperature control", "Timer function", "Safety features"]
            },
            {
                "id": "4",
                "name": "Steam Shower Generator",
                "category": "steam-bath",
                "price": 24000,
                "priceUnit": "Piece",
                "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&q=80",
                "description": "Premium steam generator for luxury steam shower experiences. Perfect for residential and spa applications.",
                "features": ["Quick steam generation", "Auto-flush system", "Corrosion resistant", "Energy efficient"]
            },
            {
                "id": "5",
                "name": "Mitsu Booster Pump",
                "category": "booster-pumps",
                "price": 12000,
                "priceUnit": "Piece",
                "image": "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500&q=80",
                "description": "High-performance Mitsu brand booster pump with superior build quality and reliability.",
                "features": ["Japanese technology", "Whisper quiet", "Robust design", "Easy installation"]
            },
            {
                "id": "6",
                "name": "Commercial Sauna Bath",
                "category": "sauna-bath",
                "price": 150000,
                "priceUnit": "Unit",
                "image": "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&q=80",
                "description": "Complete commercial sauna bath system with premium wood finish. Ideal for gyms, spas, and wellness centers.",
                "features": ["Premium wood construction", "Digital controls", "Energy efficient heaters", "Custom sizes available"]
            },
            {
                "id": "7",
                "name": "Mitsu Hydro Pneumatic Pump System",
                "category": "hydro-pneumatic",
                "price": 200000,
                "priceUnit": "Piece",
                "image": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&q=80",
                "description": "Complete hydro pneumatic pumping system for buildings and complexes. Ensures constant water pressure across all floors.",
                "features": ["Automatic operation", "Pressure regulation", "Multiple pump configuration", "Control panel included"]
            },
            {
                "id": "8",
                "name": "Swimming Pool Filtration Pump",
                "category": "swimming-pool",
                "price": 125000,
                "priceUnit": "Piece",
                "image": "https://images.unsplash.com/photo-1519235624215-85175d5e0622?w=500&q=80",
                "description": "High-capacity pool filtration system with pump for crystal clear water. Suitable for medium to large pools.",
                "features": ["Multi-stage filtration", "Energy saving motor", "Easy filter cleaning", "Corrosion resistant"]
            }
        ]
        await db.products.insert_many(default_products)
        logger.info("Created default products")

# Admin Auth Routes
@api_router.post("/admin/login")
async def admin_login(credentials: AdminLogin):
    admin = await db.admins.find_one({"username": credentials.username})
    if not admin or not verify_password(credentials.password, admin["password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    access_token = create_access_token(data={"sub": credentials.username})
    return {"access_token": access_token, "token_type": "bearer", "username": credentials.username}

@api_router.get("/admin/verify")
async def verify_admin(username: str = Depends(get_current_admin)):
    return {"username": username, "authenticated": True}

# Products Routes
@api_router.get("/products", response_model=List[Product])
async def get_products(category: Optional[str] = None):
    query = {}
    if category and category != "all":
        query["category"] = category
    products = await db.products.find(query).to_list(1000)
    return products

@api_router.get("/products/{product_id}", response_model=Product)
async def get_product(product_id: str):
    product = await db.products.find_one({"id": product_id})
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product

@api_router.post("/products", response_model=Product)
async def create_product(product: ProductCreate, username: str = Depends(get_current_admin)):
    from datetime import datetime
    import uuid
    product_dict = product.dict()
    product_dict["id"] = str(uuid.uuid4())
    product_dict["created_at"] = datetime.utcnow()
    product_dict["updated_at"] = datetime.utcnow()
    await db.products.insert_one(product_dict)
    return product_dict

@api_router.put("/products/{product_id}", response_model=Product)
async def update_product(product_id: str, product: ProductCreate, username: str = Depends(get_current_admin)):
    from datetime import datetime
    existing = await db.products.find_one({"id": product_id})
    if not existing:
        raise HTTPException(status_code=404, detail="Product not found")
    
    product_dict = product.dict()
    product_dict["updated_at"] = datetime.utcnow()
    await db.products.update_one({"id": product_id}, {"$set": product_dict})
    updated = await db.products.find_one({"id": product_id})
    return updated

@api_router.delete("/products/{product_id}")
async def delete_product(product_id: str, username: str = Depends(get_current_admin)):
    result = await db.products.delete_one({"id": product_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Product not found")
    return {"message": "Product deleted successfully"}

# Company Info Routes
@api_router.get("/company-info", response_model=CompanyInfo)
async def get_company_info():
    info = await db.company_info.find_one({})
    if not info:
        raise HTTPException(status_code=404, detail="Company info not found")
    return info

@api_router.put("/company-info", response_model=CompanyInfo)
async def update_company_info(info: CompanyInfo, username: str = Depends(get_current_admin)):
    await db.company_info.delete_many({})
    info_dict = info.dict()
    await db.company_info.insert_one(info_dict)
    return info

# Categories Routes
@api_router.get("/categories", response_model=List[Category])
async def get_categories():
    categories = await db.categories.find().to_list(1000)
    return categories

@api_router.post("/categories", response_model=Category)
async def create_category(category: CategoryCreate, username: str = Depends(get_current_admin)):
    # Get max id
    max_cat = await db.categories.find_one(sort=[("id", -1)])
    new_id = (max_cat["id"] + 1) if max_cat else 1
    category_dict = category.dict()
    category_dict["id"] = new_id
    await db.categories.insert_one(category_dict)
    return category_dict

@api_router.put("/categories/{category_id}", response_model=Category)
async def update_category(category_id: int, category: CategoryCreate, username: str = Depends(get_current_admin)):
    existing = await db.categories.find_one({"id": category_id})
    if not existing:
        raise HTTPException(status_code=404, detail="Category not found")
    
    await db.categories.update_one({"id": category_id}, {"$set": category.dict()})
    updated = await db.categories.find_one({"id": category_id})
    return updated

@api_router.delete("/categories/{category_id}")
async def delete_category(category_id: int, username: str = Depends(get_current_admin)):
    result = await db.categories.delete_one({"id": category_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Category not found")
    return {"message": "Category deleted successfully"}

# Inquiries Routes
@api_router.post("/inquiries", response_model=Inquiry)
async def create_inquiry(inquiry: InquiryCreate):
    from datetime import datetime
    import uuid
    inquiry_dict = inquiry.dict()
    inquiry_dict["id"] = str(uuid.uuid4())
    inquiry_dict["created_at"] = datetime.utcnow()
    inquiry_dict["status"] = "new"
    await db.inquiries.insert_one(inquiry_dict)
    return inquiry_dict

@api_router.get("/inquiries", response_model=List[Inquiry])
async def get_inquiries(username: str = Depends(get_current_admin)):
    inquiries = await db.inquiries.find().sort("created_at", -1).to_list(1000)
    return inquiries

@api_router.get("/inquiries/{inquiry_id}", response_model=Inquiry)
async def get_inquiry(inquiry_id: str, username: str = Depends(get_current_admin)):
    inquiry = await db.inquiries.find_one({"id": inquiry_id})
    if not inquiry:
        raise HTTPException(status_code=404, detail="Inquiry not found")
    return inquiry

@api_router.delete("/inquiries/{inquiry_id}")
async def delete_inquiry(inquiry_id: str, username: str = Depends(get_current_admin)):
    result = await db.inquiries.delete_one({"id": inquiry_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Inquiry not found")
    return {"message": "Inquiry deleted successfully"}

# Stats Route
@api_router.get("/stats", response_model=Stats)
async def get_stats(username: str = Depends(get_current_admin)):
    total_products = await db.products.count_documents({})
    total_inquiries = await db.inquiries.count_documents({})
    new_inquiries = await db.inquiries.count_documents({"status": "new"})
    total_categories = await db.categories.count_documents({})
    
    return {
        "totalProducts": total_products,
        "totalInquiries": total_inquiries,
        "newInquiries": new_inquiries,
        "totalCategories": total_categories
    }

# Health check
@api_router.get("/")
async def root():
    return {"message": "Maitreyee Hydro Systems API"}

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup_event():
    await init_data()

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
