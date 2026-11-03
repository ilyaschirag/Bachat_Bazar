from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from db import supabase

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/get_category_image')
def get_category_image():
    try:
        files = supabase.storage.from_("Grocery").list("Category")
    except Exception as error:
        raise HTTPException(
            status_code=502,
            detail=f"Could not access Grocery/Category: {error}",
        ) from error

    products = [
        {
            "name": file["name"],
            "image_url": supabase.storage.from_("Grocery").get_public_url(f"Category/{file['name']}"),
        }for file in files
    ]


    return {"products": products}