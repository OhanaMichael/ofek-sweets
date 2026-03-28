# 🚀 חיבור האתר ל-GitHub - הנחיות מלאות

## 📋 פרטי ה-Repository שלך
- **כתובת**: https://github.com/OhanaMichael/ofek-sweets.git
- **בעלים**: OhanaMichael
- **שם הפרויקט**: ofek-sweets

---

## שלב 1️⃣: הורד את הקבצים 📥

1. **הורד** את הקובץ **ofek-github.zip** (למעלה ↗️)
2. **פתח** את הקובץ (לחיצה כפולה)
3. **שמור** את התיקייה **ofek-github** במיקום נוח (למשל על שולחן העבודה)

---

## שלב 2️⃣: התקן Git (אם עוד לא מותקן) 🔧

### Windows:
1. הורד Git מ-[git-scm.com](https://git-scm.com/download/win)
2. התקן עם ההגדרות ברירת המחדל
3. אחרי ההתקנה, פתח **Git Bash** (חפש בתפריט Start)

### Mac:
1. פתח **Terminal**
2. הקלד: `git --version`
3. אם Git לא מותקן, Mac יציע להתקין אוטומטית

### Linux:
```bash
sudo apt-get install git
```

---

## שלב 3️⃣: הגדר את Git (פעם ראשונה בלבד) ⚙️

פתח **Terminal** (Mac/Linux) או **Git Bash** (Windows) והקלד:

```bash
git config --global user.name "Michael Ohana"
git config --global user.email "michael@itmo.co.il"
```

💡 **שים לב**: השתמש בכתובת המייל שמחוברת לחשבון GitHub שלך

---

## שלב 4️⃣: העלה את הקבצים ל-GitHub 🚀

### 4.1 פתח Terminal/Git Bash במיקום התיקייה

**Windows (Git Bash):**
```bash
cd Desktop/ofek-github
```

**Mac/Linux (Terminal):**
```bash
cd ~/Desktop/ofek-github
```

💡 **טיפ**: אפשר גם לגרור את התיקייה ל-Terminal/Git Bash ולהקליד `cd ` לפני

---

### 4.2 אתחל Git בתיקייה

```bash
git init
```

תראה הודעה: `Initialized empty Git repository`

---

### 4.3 הוסף את כל הקבצים

```bash
git add .
```

---

### 4.4 צור commit ראשון

```bash
git commit -m "Initial commit - ofek sweets website"
```

---

### 4.5 חבר ל-Repository שלך ב-GitHub

```bash
git remote add origin https://github.com/OhanaMichael/ofek-sweets.git
```

---

### 4.6 בדוק שהחיבור תקין (אופציונלי)

```bash
git remote -v
```

אמור להציג:
```
origin  https://github.com/OhanaMichael/ofek-sweets.git (fetch)
origin  https://github.com/OhanaMichael/ofek-sweets.git (push)
```

---

### 4.7 העלה את הקבצים ל-GitHub

```bash
git branch -M main
git push -u origin main
```

📝 **הערה**: GitHub יבקש ממך להתחבר:
- **Username**: OhanaMichael
- **Password**: השתמש ב-**Personal Access Token** (לא סיסמה רגילה!)

---

## 🔑 יצירת Personal Access Token (אם נדרש)

אם GitHub מבקש סיסמה ואין לך Token:

1. גש ל-[GitHub Settings](https://github.com/settings/tokens)
2. לחץ **Generate new token** → **Generate new token (classic)**
3. תן לו שם: `Netlify Deploy`
4. בחר Expiration: **No expiration**
5. סמן: ✅ **repo** (כל התיבות תחתיו)
6. לחץ **Generate token** בתחתית
7. **העתק את ה-Token** (לא תראה אותו שוב!)
8. השתמש בו במקום סיסמה

---

## שלב 5️⃣: חבר את Netlify ל-GitHub 🔗

### 5.1 היכנס ל-Netlify
1. גש ל-[netlify.com](https://app.netlify.com)
2. התחבר לחשבון שלך

---

### 5.2 מחק את ה-Site הישן (אופציונלי)
אם יש לך כבר site שהעלית ידנית:
1. לך ל-Site settings
2. בתחתית: **Delete site**
3. אישור

**או** פשוט עדכן את הקיים (צעד 5.3)

---

### 5.3 חבר את GitHub
1. לחץ **Add new site** → **Import an existing project**
2. בחר **GitHub**
3. GitHub יבקש אישור - לחץ **Authorize Netlify**
4. חפש את `ofek-sweets` ברשימה
5. לחץ על הפרויקט

---

### 5.4 הגדרות Build
בדף הבא, השאר הכל ריק:
- **Branch to deploy**: `main` ✅
- **Build command**: (השאר ריק)
- **Publish directory**: (השאר ריק)

לחץ **Deploy site**

---

### 5.5 חבר את הדומיין
1. אחרי שה-Deploy הסתיים, לך ל-**Site settings**
2. **Domain management** → **Add custom domain**
3. הזן: `www.ofek-sweets.co.il`
4. לחץ **Verify** → **Add domain**

---

## ✅ זהו! האתר מחובר! 🎉

מעכשיו, כל פעם שתעשה שינוי:

```bash
git add .
git commit -m "תיאור השינוי"
git push
```

והאתר יתעדכן אוטומטית ב-Netlify! 🚀

---

## 📊 בדיקות סופיות

וודא ש:
- ✅ האתר נטען ב-www.ofek-sweets.co.il
- ✅ HTTPS פעיל (מנעול ירוק)
- ✅ כל הכפתורים עובדים
- ✅ ב-Netlify רואים "Published" בירוק
- ✅ ב-GitHub רואים את כל הקבצים

---

## 🆘 פתרון בעיות נפוצות

### "Permission denied"
- צור Personal Access Token כמתואר למעלה
- השתמש בו במקום סיסמה

### "Repository not found"
- בדוק שכתובת ה-URL נכונה
- וודא שאתה מחובר עם המשתמש הנכון

### "Already exists"
אם התיקייה כבר Git repository:
```bash
rm -rf .git
git init
```
ואז המשך משלב 4.3

### Deploy נכשל ב-Netlify
- בדוק ש-netlify.toml קיים
- בדוק שכל 5 הקבצים קיימים

---

## 💡 טיפים מועילים

### לראות סטטוס הקבצים
```bash
git status
```

### לראות היסטוריית שינויים
```bash
git log --oneline
```

### למשוך עדכונים מ-GitHub
```bash
git pull
```

---

## 📞 תמיכה

אם משהו לא עובד:
1. בדוק את ההודעות ב-Terminal
2. גש ל-GitHub ובדוק שהקבצים הועלו
3. בדוק Logs ב-Netlify (Deploys → קליק על ה-Deploy האחרון)

---

**בהצלחה! 🎂✨**
