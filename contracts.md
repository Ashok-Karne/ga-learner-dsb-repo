# Backend & Frontend Integration Contracts

## API Endpoints

### 1. Products API
- **GET** `/api/products` - Get all products with optional category filter
- **GET** `/api/products/:id` - Get single product by ID
- **POST** `/api/products` - Create new product (Admin only)
- **PUT** `/api/products/:id` - Update product (Admin only)
- **DELETE** `/api/products/:id` - Delete product (Admin only)

### 2. Company Info API
- **GET** `/api/company-info` - Get company information
- **PUT** `/api/company-info` - Update company info (Admin only)

### 3. Contact/Inquiry API
- **POST** `/api/inquiries` - Submit contact form / quote request
- **GET** `/api/inquiries` - Get all inquiries (Admin only)
- **GET** `/api/inquiries/:id` - Get single inquiry (Admin only)
- **DELETE** `/api/inquiries/:id` - Delete inquiry (Admin only)

### 4. Categories API
- **GET** `/api/categories` - Get all product categories
- **POST** `/api/categories` - Create category (Admin only)
- **PUT** `/api/categories/:id` - Update category (Admin only)
- **DELETE** `/api/categories/:id` - Delete category (Admin only)

### 5. Admin Auth API
- **POST** `/api/admin/login` - Admin login
- **POST** `/api/admin/logout` - Admin logout
- **GET** `/api/admin/verify` - Verify admin session

### 6. Stats API
- **GET** `/api/stats` - Get dashboard statistics (Admin only)

## Data Models

### Product Model
```python
{
    id: str (auto-generated)
    name: str
    category: str
    price: int
    priceUnit: str
    image: str (URL)
    description: str
    features: List[str]
    created_at: datetime
    updated_at: datetime
}
```

### Company Info Model
```python
{
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
}
```

### Inquiry Model
```python
{
    id: str (auto-generated)
    name: str
    email: str
    phone: str
    subject: str (optional)
    message: str
    created_at: datetime
    status: str (new/read/replied)
}
```

### Category Model
```python
{
    id: int
    name: str
    slug: str
}
```

### Admin Model
```python
{
    username: str (unique)
    password: str (hashed)
    created_at: datetime
}
```

## Mock Data to Replace

Current mock data in `/app/frontend/src/mock.js`:
- `companyInfo` → Replace with API call to `/api/company-info`
- `products` → Replace with API call to `/api/products`
- `categories` → Replace with API call to `/api/categories`
- `stats` → Replace with API call to `/api/stats`

## Frontend Integration Changes

### 1. Home Page (`/app/frontend/src/pages/Home.jsx`)
- Replace `products` import with `useEffect` + API call to fetch products
- Replace `companyInfo` import with API call
- Contact form submission → POST to `/api/inquiries`

### 2. Products Page (`/app/frontend/src/pages/Products.jsx`)
- Replace `products` and `categories` imports with API calls
- Implement real-time search and filtering

### 3. About Page (`/app/frontend/src/pages/About.jsx`)
- Replace `companyInfo` import with API call

### 4. Contact Page (`/app/frontend/src/pages/Contact.jsx`)
- Form submission → POST to `/api/inquiries`

### 5. Admin Panel (New Pages to Create)
- `/admin/login` - Admin login page
- `/admin/dashboard` - Dashboard with stats
- `/admin/products` - Manage products (CRUD)
- `/admin/company-info` - Edit company information
- `/admin/inquiries` - View contact inquiries
- `/admin/categories` - Manage categories

## Backend Implementation Plan

1. **Database Schema** - Create MongoDB collections
2. **Models** - Define Pydantic models
3. **Authentication** - Implement JWT-based admin auth
4. **CRUD Operations** - Implement all endpoints
5. **Image Upload** - Handle product image uploads (store URLs or use file storage)
6. **Error Handling** - Proper error responses
7. **Validation** - Input validation for all endpoints

## Security Considerations

- Password hashing for admin accounts
- JWT token authentication
- Protected admin routes
- Input sanitization
- CORS configuration
- File upload validation

## Next Steps

1. Create MongoDB models and schemas
2. Implement authentication system
3. Create all API endpoints
4. Build admin panel frontend
5. Integrate frontend with backend APIs
6. Test all functionality
