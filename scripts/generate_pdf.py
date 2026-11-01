#!/usr/bin/env python3
"""
Generates the pristine 2-page ATS vector PDF using headless Chromium.
Usage: python3 scripts/generate_pdf.py
"""
import asyncio
import os
import sys
from playwright.async_api import async_playwright

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUTPUT_PATH = os.path.join(ROOT, 'public', 'Sarath_Chandra_Resume.pdf')
URL = os.environ.get('RESUME_URL', 'http://localhost:5173/resume')

async def main():
    print(f"Connecting to {URL}...")
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        try:
            await page.goto(URL, wait_until='networkidle', timeout=15000)
        except Exception as e:
            print(f"Error loading {URL}: {e}")
            print("Make sure 'npm run dev' is running first!")
            await browser.close()
            sys.exit(1)

        os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)
        await page.pdf(
            path=OUTPUT_PATH,
            format='Letter',
            print_background=True,
            prefer_css_page_size=True
        )
        await browser.close()
        print(f"✅ Generated: {OUTPUT_PATH}")

if __name__ == '__main__':
    asyncio.run(main())
