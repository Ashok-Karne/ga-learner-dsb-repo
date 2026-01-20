from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
import uuid

# Product Models
class ProductCreate(BaseModel):
    name: str
    category: str
    price: int
    priceUnit: str = "Piece"
    image: str
    description: str
    features: List[str] = []

class Product(ProductCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

# Company Info Model
class CompanyInfo(BaseModel):
    name: str
    tagline: str
    description: str
    yearEstablished: str
    natureOfBusiness: str
    legalStatus: str
    annualTurnover: str
    gstNo: str
    gstRegistrationDate: str
    email: str
    phone: str
    address: str
    ceo: str

# Inquiry Models
class InquiryCreate(BaseModel):
    name: str
    email: Optional[str] = None
    phone: str
    subject: Optional[str] = None
    message: str

class Inquiry(InquiryCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=datetime.utcnow)
    status: str = "new"

# Category Models
class CategoryCreate(BaseModel):
    name: str
    slug: str

class Category(CategoryCreate):
    id: int

# Admin Models
class AdminLogin(BaseModel):
    username: str
    password: str

class AdminCreate(BaseModel):
    username: str
    password: str

class Admin(BaseModel):
    username: str
    created_at: datetime = Field(default_factory=datetime.utcnow)

# Stats Model
class Stats(BaseModel):
    totalProducts: int
    totalInquiries: int
    newInquiries: int
    totalCategories: int