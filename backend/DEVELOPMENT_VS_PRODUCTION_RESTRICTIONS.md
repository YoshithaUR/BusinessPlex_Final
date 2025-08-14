# Development vs Production Restrictions

## 🔒 **Security Headers (Helmet)**

### **Production (Strict)**
- ✅ Content Security Policy (CSP) - Enabled
- ✅ Cross-Origin Embedder Policy (COEP) - Enabled  
- ✅ Cross-Origin Resource Policy (CORP) - Enabled
- ✅ XSS Protection - Enabled
- ✅ Frame Options - Enabled
- ✅ HSTS - Enabled

### **Development (Relaxed)**
- ❌ Content Security Policy (CSP) - Disabled
- ❌ Cross-Origin Embedder Policy (COEP) - Disabled
- ❌ Cross-Origin Resource Policy (CORP) - Disabled
- ✅ XSS Protection - Enabled
- ✅ Frame Options - Enabled
- ✅ HSTS - Enabled

---

## 🌐 **CORS Restrictions**

### **Production (Strict)**
- ✅ Origin: Only `CLIENT_URL` allowed
- ✅ Methods: GET, POST only
- ✅ Headers: Content-Type, Authorization only
- ✅ Credentials: true

### **Development (Permissive)**
- ✅ Origin: All origins allowed (`origin: true`)
- ✅ Methods: GET, POST, PUT, DELETE, OPTIONS
- ✅ Headers: Content-Type, Authorization, X-Requested-With
- ✅ Credentials: true

---

## 📏 **Request Size Limits**

### **Production (Strict)**
- ✅ JSON payloads: 10kb maximum
- ✅ URL-encoded data: 10kb maximum

### **Development (Lenient)**
- ✅ JSON payloads: 50mb maximum
- ✅ URL-encoded data: 50mb maximum

---

## ⚡ **Rate Limiting**

### **Production (Active)**
- ✅ General API: 100 requests per 15 minutes per IP
- ✅ Contact form: 5 submissions per hour per IP
- ✅ Rate limit headers included

### **Development (Disabled)**
- ❌ No rate limiting
- ❌ No request limits
- ❌ Unlimited testing possible

---

## 📝 **Logging & Monitoring**

### **Production (Comprehensive)**
- ✅ Full request logging with IP addresses
- ✅ Security event monitoring
- ✅ Suspicious pattern detection
- ✅ Response time tracking
- ✅ Request body logging (sanitized)

### **Development (Minimal)**
- ✅ Simple request logging: `[DEV] METHOD /path`
- ❌ No security monitoring
- ❌ No pattern detection
- ❌ No response time tracking
- ❌ No request body logging

---

## ✅ **Input Validation**

### **Production (Strict)**
- ✅ All validation rules enforced
- ✅ Character length limits enforced
- ✅ Format requirements enforced
- ✅ Required fields mandatory
- ✅ Enum value restrictions enforced

### **Development (Lenient)**
- ✅ All validation rules enforced (but with relaxed limits)
- ✅ Character length limits: 50% of production min, 2x production max
- ✅ Format requirements enforced
- ✅ Required fields mandatory
- ✅ Enum value restrictions enforced

---

## 🧹 **Input Sanitization**

### **Production (Strict)**
- ✅ HTML tags removed (`<`, `>`)
- ✅ JavaScript protocol blocked (`javascript:`)
- ✅ Event handlers removed (`onclick=`, `onload=`, etc.)
- ✅ All XSS vectors blocked

### **Development (Lenient)**
- ❌ HTML tags allowed
- ✅ JavaScript protocol blocked (`javascript:`)
- ❌ Event handlers allowed
- ✅ Basic XSS protection only

---

## 🚨 **Error Handling**

### **Production (Secure)**
- ✅ Generic error messages
- ❌ No stack traces
- ❌ No sensitive data in errors
- ❌ No debug information

### **Development (Detailed)**
- ✅ Detailed error messages
- ✅ Full stack traces
- ✅ Request details included
- ✅ Debug information provided
- ✅ Available routes listed in 404 errors
- ✅ Validation debug info included

---

## 🔍 **Validation Error Responses**

### **Production (Clean)**
```json
{
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "Please provide a valid email address",
      "value": "invalid-email"
    }
  ]
}
```

### **Development (Detailed)**
```json
{
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "Please provide a valid email address",
      "value": "invalid-email"
    }
  ],
  "debug": {
    "totalErrors": 1,
    "requestBody": { "email": "invalid-email" },
    "timestamp": "2024-01-01T00:00:00.000Z"
  }
}
```

---

## 🎯 **Key Benefits**

### **Development Environment**
- 🚀 **Faster development** - No rate limiting delays
- 🔧 **Easier debugging** - Detailed error messages
- 🌐 **Flexible CORS** - Test from any origin
- 📏 **Large payloads** - Test with big data
- 🛡️ **Relaxed security** - Focus on functionality

### **Production Environment**
- 🔒 **Maximum security** - All protections active
- 🚫 **Abuse prevention** - Rate limiting active
- 🌐 **Origin control** - Only trusted domains
- 📏 **Resource protection** - Size limits enforced
- 🛡️ **Attack prevention** - Strict sanitization

---

## 🔧 **Environment Variables**

Set these in your `.env` file:

```bash
# Development
NODE_ENV=development
CLIENT_URL=http://localhost:3000

# Production  
NODE_ENV=production
CLIENT_URL=https://yourdomain.com
```

---

## 📊 **Summary**

| Feature | Development | Production |
|---------|-------------|------------|
| Rate Limiting | ❌ Disabled | ✅ Enabled |
| Request Size | 50mb | 10kb |
| CORS | Permissive | Strict |
| Security Headers | Relaxed | Full |
| Logging | Minimal | Comprehensive |
| Error Details | Full | Generic |
| Input Sanitization | Lenient | Strict |
| Validation | Relaxed Limits | Strict Limits |

This setup provides **maximum flexibility for development** while maintaining **maximum security for production**.
