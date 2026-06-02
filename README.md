# Adobe PDF Login Form

A modern, two-step login form with multi-language support and PDF viewer integration.

## Features

✅ **Two-Step Authentication**
- Step 1: Email entry with "View PDF" option
- Step 2: Password entry with email confirmation

✅ **Email Management**
- Browser autofill support for recently used emails
- Email suggestion from browser history
- Change email option before password entry
- Remember email functionality

✅ **Multi-Language Support**
- English (en)
- Spanish (es)
- French (fr)
- Chinese (zh)

✅ **PDF Integration**
- Direct link to view Telegraphic Transfer PDF
- Opens PDF in new tab

✅ **Form Validation**
- Email format validation
- Password length validation (minimum 6 characters)
- Real-time error messages
- Enter key support for form submission

✅ **Responsive Design**
- Works on desktop, tablet, and mobile
- Smooth animations and transitions
- Clean, modern UI

✅ **Local Storage**
- Saves email for future logins
- Remembers preferred language
- Persistent data across sessions

## Folder Structure

```
adobe-pdf/
├── index.html          # Main HTML file
├── css/
│   ├── style.css       # Page 1 styling
│   └── page2.css       # Page 2 styling
├── js/
│   ├── page1.js        # Page 1 form logic
│   ├── page2.js        # Page 2 form logic
│   └── translations.js # Multi-language support
├── images/
│   └── background.jpg  # Background image (your image goes here)
└── README.md           # This file
```

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/discoveravalon-life-pdf/view.git
   cd view
   ```

2. **Add your background image**
   - Place your image file in the `images/` folder
   - Name it `background.jpg` (or update the CSS file path)

3. **Open in browser**
   - Double-click `index.html` to open locally, or
   - Use Live Server extension in VS Code

## How to Use

1. **Enter Email**: Type or select your email address
2. **Click Continue**: Proceed to the password step
3. **Review Email**: Confirm the email shown on page 2
4. **Enter Password**: Type your password
5. **Access**: Click "Access PDF" to complete

## Customization

### Add More Languages
In `js/translations.js`, add a new language object:
```javascript
ar: {
    headerTitle: 'دخول',
    // ... add all other translations
}
```

### Change Colors
Edit `css/style.css` and modify:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal and commercial use.

## Author

Created by seo6-ma
