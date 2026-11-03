import os
from supabase import create_client, Client
from dotenv import load_dotenv

load_dotenv()

supabase_url = os.environ["SUPABASE_URL"]
supabase_key = os.environ["SUPABASE_KEY"]

supabase_url = supabase_url.rstrip("/")
if supabase_url.endswith("/rest/v1"):
    supabase_url = supabase_url.removesuffix("/rest/v1")

supabase: Client = create_client(
    supabase_url,
    supabase_key,
)

__all__ = ["supabase"]