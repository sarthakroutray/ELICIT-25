# Sponsor Logo Collection Guide

This guide will help you collect and add all 31 sponsor logos for the ELICIT Previous Sponsors component.

## 🎯 Required Logo Files

Place these files in `ELICIT-forked/public/sponsors/` with exact filenames:

### Technology Companies
- `jetbrains.png` - [JetBrains Brand Assets](https://www.jetbrains.com/company/brand/)
- `cisco.png` - [Cisco Brand Center](https://www.cisco.com/c/en/us/about/brand-center.html)
- `lenovo.png` - [Lenovo Brand Portal](https://www.lenovo.com/us/en/about/brand/)
- `snapchat.png` - [Snap Brand Guidelines](https://kit.snapchat.com/)
- `nzxt.png` - [NZXT Press Kit](https://www.nzxt.com/press)

### Blockchain & Crypto
- `filecoin.png` - [Filecoin Brand Assets](https://fil.org/brand/)
- `polygon.png` - [Polygon Brand Kit](https://polygon.technology/brand-kit)
- `coindcx.png` - [CoinDCX About Page](https://coindcx.com/)

### Indian Companies
- `airtel.png` - [Airtel Press Releases](https://www.airtel.in/press-release)
- `ongc.png` - [ONGC Official Website](https://www.ongcindia.com/)
- `bharatpetroleum.png` - [BPCL Website](https://www.bharatpetroleum.in/)
- `jio.png` - [Reliance Jio Media](https://www.jio.com/press-release)

### Education & Learning
- `codingblocks.png` - [Coding Blocks](https://codingblocks.com/)
- `geeksforgeeks.png` - [GeeksforGeeks](https://www.geeksforgeeks.org/)
- `newtonschool.png` - [Newton School](https://www.newtonschool.co/)
- `interviewcake.png` - [Interview Cake](https://www.interviewcake.com/)

### Platforms & Services
- `devfolio.png` - [Devfolio](https://devfolio.co/)
- `internshala.png` - [Internshala](https://internshala.com/)
- `unstop.png` - [Unstop (formerly Dare2Compete)](https://unstop.com/)
- `groww.png` - [Groww](https://groww.in/)
- `eatsure.png` - [EatSure](https://www.eatsure.com/)

### Technology Tools
- `axure.png` - [Axure Brand Resources](https://www.axure.com/brand)
- `xyz.png` - [.XYZ Domain](https://gen.xyz/)
- `givemycertificate.png` - [Give My Certificate](https://givemycertificate.com/)

### Other Companies
- `zebronics.png` - [Zebronics](https://zebronics.com/)
- `lumos.png` - [Lumos Labs](https://www.lumosity.com/)
- `wayspire.png` - [Wayspire](https://wayspire.com/)
- `kwikpic.png` - [KwikPic](https://kwikpic.com/)
- `litt.png` - [LITT](https://litt.ai/)
- `jars.png` - [JARS](https://jars.com/)
- `spykar.png` - [Spykar](https://spykar.com/)

## 📋 Collection Process

### Method 1: Official Brand Kits (Recommended)
1. Visit each company's official website
2. Look for "Brand Kit", "Press Kit", "Media Kit", or "Brand Guidelines"
3. Download official PNG logos (preferably with transparent backgrounds)
4. Rename to match the exact filenames above

### Method 2: Google Images (Backup)
1. Search: `"[Company Name] logo PNG transparent"`
2. Use Tools → Color → Transparent
3. Choose high-resolution images (minimum 200x200px)
4. Right-click → Save Image As

### Method 3: Logo Databases
- [Seek Logo](https://seeklogo.com/)
- [Logo Wine](https://www.logo.wine/)
- [PNG Tree](https://pngtree.com/)
- [Free Logo PNG](https://freelogopng.com/)

## 🔧 Logo Specifications

### Technical Requirements
- **Format**: PNG (preferred) or SVG
- **Background**: Transparent
- **Size**: Minimum 200x200px, max 512x512px
- **Aspect Ratio**: Square preferred, but rectangular is acceptable
- **File Size**: Under 100KB each for optimal loading

### Quality Guidelines
- High resolution and crisp
- Official brand colors
- Clean, professional appearance
- No watermarks or artifacts

## 🚀 Quick Setup Commands

```bash
# Navigate to project
cd ELICIT-forked

# Create sponsors directory if it doesn't exist
mkdir -p public/sponsors

# Verify your logos are in place
ls public/sponsors/
```

## ✅ Testing Your Logos

After adding logos:

1. Start your development server
2. Navigate to the Previous Sponsors section
3. Check that logos display correctly
4. Verify fallback text appears for missing logos
5. Test loading states and error handling

## 📝 Legal Notes

- Ensure you have permission to use company logos
- Sponsor logos are typically allowed for promotional purposes
- Keep original brand colors and proportions
- Do not modify or distort the logos

## 🔄 Automated Updates

Your component automatically handles:
- ✅ Loading states with spinners
- ✅ Error fallbacks with company names
- ✅ Smooth transitions and hover effects
- ✅ Responsive sizing

Once you add the PNG files with correct names, they'll appear immediately in your carousel!
