# Neon Apex Racing – Android APK

## Easiest: build in the cloud (no Android Studio)
1. Create a new GitHub repo and push this folder (the workflow is in `.github/workflows/build-apk.yml`).
2. Open the repo's **Actions** tab -> "Build APK" -> wait ~5 min.
3. Download the `NeonApexRacing-apk` artifact, unzip, and install `app-debug.apk` on your phone
   (allow "Install unknown apps").

## Or build locally (Node 18+, JDK 17, Android Studio/SDK)
    npm install
    npm run build
    npx cap add android
    npx cap sync android
    cd android && ./gradlew assembleDebug
APK: android/app/build/outputs/apk/debug/app-debug.apk
(For portrait + fullscreen, apply the two sed edits shown in the workflow file.)
