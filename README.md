# Art Gallery API  
Server-side API providing searchable artwork, artist, and gallery data using Node.js, Express, and JSON datasets.  
COMP 3612 — Assignment 3

---

## Deployment
The API is live at:

**https://art-gallery-api-y79h.onrender.com**

---

## Example API Requests  
Click any link below to test each API endpoint directly.

---

## Paintings Endpoints

- https://art-gallery-api-y79h.onrender.com/api/paintings  
- https://art-gallery-api-y79h.onrender.com/api/painting/433  
- https://art-gallery-api-y79h.onrender.com/api/painting/43374534856  
- https://art-gallery-api-y79h.onrender.com/api/painting/gallery/7  
- https://art-gallery-api-y79h.onrender.com/api/painting/gallery/43374534856  
- https://art-gallery-api-y79h.onrender.com/api/painting/artist/106  
- https://art-gallery-api-y79h.onrender.com/api/painting/artist/43374534856  
- https://art-gallery-api-y79h.onrender.com/api/painting/year/1850/1900  
- https://art-gallery-api-y79h.onrender.com/api/painting/year/2200/2400  
- https://art-gallery-api-y79h.onrender.com/api/painting/title/self  
- https://art-gallery-api-y79h.onrender.com/api/painting/title/dfjkghdfkgh  
- https://art-gallery-api-y79h.onrender.com/api/painting/color/NAPA  
- https://art-gallery-api-y79h.onrender.com/api/painting/color/coffee%20bean  
- https://art-gallery-api-y79h.onrender.com/api/painting/color/kcvhvxchbkcj  

---

## Artist Endpoints

- https://art-gallery-api-y79h.onrender.com/api/artists  
- https://art-gallery-api-y79h.onrender.com/api/artists/FRANCE  
- https://art-gallery-api-y79h.onrender.com/api/artists/france  
- https://art-gallery-api-y79h.onrender.com/api/artists/sdfjjsdf  

---

## Galleries Endpoints

- https://art-gallery-api-y79h.onrender.com/api/galleries  
- https://art-gallery-api-y79h.onrender.com/api/galleries/france  
- https://art-gallery-api-y79h.onrender.com/api/galleries/kcvhvxchbkcj  

---

## Notes
- All API responses are returned in **JSON**.
- All searches are **case-insensitive**.
- Numeric fields such as IDs and year values are automatically parsed as integers.
- Error messages follow the format:

```json
{ "message": "No results found" }
