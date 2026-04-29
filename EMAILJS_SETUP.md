# EmailJS 本地設置指南

## 步驟 1：註冊 EmailJS 帳戶

1. 訪問 https://www.emailjs.com
2. 點擊「**Sign Up Free**」
3. 用 Gmail / GitHub / 郵箱註冊
4. 驗證郵箱後進入 Dashboard

---

## 步驟 2：設置 Email Service

1. 在 Dashboard 左側找到「**Email Services**」
2. 點「**Add Service**」
3. 選擇 **Gmail**（或你的郵箱服務）
4. 點「**Connect Account**」
5. 授權 EmailJS 使用你的 Gmail
6. 複製顯示的 **Service ID**（如 `service_abc123xyz`）

---

## 步驟 3：建立 Email Template

1. 在左側找到「**Email Templates**」
2. 點「**Create New Template**」
3. 設置以下欄位（Template Editor）：

   **收件人：**
   ```
   {{to_email}}
   ```

   **主旨：**
   ```
   New Lead Inquiry from {{from_name}}
   ```

   **內容：**
   ```
   Name: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}
   Area: {{area}}
   Home Type: {{homeType}}
   Budget: {{budget}}
   Timeline: {{timeline}}
   
   Goals / Pain Points:
   {{painPoints}}
   ```

4. 點「**Save**」
5. 複製 **Template ID**（如 `template_xyz789abc`）

---

## 步驟 4：取得 Public Key

1. 在 Dashboard 點右上角「**Account**」
2. 向下滾動找「**API Keys**」
3. 複製 **Public Key**（如 `abcd1234efgh5678ijkl`）

---

## 步驟 5：填入本地 .env.local

編輯 `.env.local`：

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123xyz
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789abc
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abcd1234efgh5678ijkl
```

---

## 步驟 6：重啟 Dev Server

```bash
# 停止目前的 server（Ctrl+C）
# 重新啟動
npm run dev
```

現在表單應該可以發送郵件了！✓

---

## 測試

1. 上 http://localhost:3000/contact
2. 填表並點「Send!」
3. 檢查你的 Gmail（應該會收到表單內容）

---

## 免費額度

EmailJS 免費方案：
- ✓ 每月 200 封郵件
- ✓ 無限 Template
- ✓ 無限 Service
- 進階功能需付費

---

## 常見問題

**Q: 我沒有 Gmail？**
- 也可以用 Outlook, Yahoo, SendGrid 等（步驟一樣）

**Q: 郵件被拒？**
- 檢查 Service 是否正確授權
- 檢查 Template 變數名稱是否對應（區分大小寫）

**Q: 本地測試沒反應？**
- 確保 `.env.local` 已填
- 確保 Server 已重啟（重要！）
- 打開瀏覽器 DevTools → Console 看錯誤訊息

---

需要幫助嗎？告訴我你的進度！
