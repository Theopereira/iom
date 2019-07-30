Olá!

Resolvi novamente publicar o projeto que estou trabahando, porque estou tendo muita dificuldade de instalação do react-native-camera no projeto. Portanto, espero que neste caso eu possa solucionar, segui as orientações da aula e abaixo esta a descrição do erro que esta neste aparecendo.Ha diferença entre o video de aula e algumas descrições no build.grandle do android e bom verificar, o ultimo erro haver com react-gradle linha 193 do node-modules.


C:\Users\Windows\Desktop\IOM>react-native run-android
info Running jetifier to migrate libraries to AndroidX. You can disable it using "--no-jetifier" flag.
Jetifier found 971 file(s) to forward-jetify. Using 4 workers...
info Starting JS server...
info Installing the app...

FAILURE: Build failed with an exception.

* What went wrong:
Could not determine the dependencies of task ':app:preDebugBuild'.
> Could not resolve all task dependencies for configuration ':app:debugRuntimeClasspath'.
   > Could not resolve project :react-native-camera.
     Required by:
         project :app
      > Cannot choose between the following variants of project :react-native-camera:
          - generalDebugRuntimeElements
          - mlkitDebugRuntimeElements
        All of them match the consumer attributes:
          - Variant 'generalDebugRuntimeElements':
              - Required com.android.build.api.attributes.BuildTypeAttr 'debug' and found compatible value 'debug'.
              - Found com.android.build.api.attributes.VariantAttr 'generalDebug' but wasn't required.
              - Required com.android.build.gradle.internal.dependency.AndroidTypeAttr 'Aar' and found compatible value 'Aar'.
              - Required org.gradle.usage 'java-runtime' and found compatible value 'java-runtime'.
              - Found react-native-camera 'general' but wasn't required.
          - Variant 'mlkitDebugRuntimeElements':
              - Required com.android.build.api.attributes.BuildTypeAttr 'debug' and found compatible value 'debug'.
              - Found com.android.build.api.attributes.VariantAttr 'mlkitDebug' but wasn't required.
              - Required com.android.build.gradle.internal.dependency.AndroidTypeAttr 'Aar' and found compatible value 'Aar'.
              - Required org.gradle.usage 'java-runtime' and found compatible value 'java-runtime'.
              - Found react-native-camera 'mlkit' but wasn't required.

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 12s

error Failed to install the app. Make sure you have the Android development environment set up: https://facebook.github.io/react-native/docs/getting-started.html#android-development-environment. Run CLI with --verbose flag for more details.
Error: Command failed: gradlew.bat app:installDebug -PreactNativeDevServerPort=8081

FAILURE: Build failed with an exception.

* What went wrong:
Could not determine the dependencies of task ':app:preDebugBuild'.
> Could not resolve all task dependencies for configuration ':app:debugRuntimeClasspath'.
   > Could not resolve project :react-native-camera.
     Required by:
         project :app
      > Cannot choose between the following variants of project :react-native-camera:
          - generalDebugRuntimeElements
          - mlkitDebugRuntimeElements
        All of them match the consumer attributes:
          - Variant 'generalDebugRuntimeElements':
              - Required com.android.build.api.attributes.BuildTypeAttr 'debug' and found compatible value 'debug'.
              - Found com.android.build.api.attributes.VariantAttr 'generalDebug' but wasn't required.
              - Required com.android.build.gradle.internal.dependency.AndroidTypeAttr 'Aar' and found compatible value 'Aar'.
              - Required org.gradle.usage 'java-runtime' and found compatible value 'java-runtime'.
              - Found react-native-camera 'general' but wasn't required.
          - Variant 'mlkitDebugRuntimeElements':
              - Required com.android.build.api.attributes.BuildTypeAttr 'debug' and found compatible value 'debug'.
              - Found com.android.build.api.attributes.VariantAttr 'mlkitDebug' but wasn't required.
              - Required com.android.build.gradle.internal.dependency.AndroidTypeAttr 'Aar' and found compatible value 'Aar'.
              - Required org.gradle.usage 'java-runtime' and found compatible value 'java-runtime'.
              - Found react-native-camera 'mlkit' but wasn't required.

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 12s

    at checkExecSyncError (child_process.js:616:11)
    at execFileSync (child_process.js:634:13)
    at runOnAllDevices (C:\Users\Windows\Desktop\IOM\node_modules\@react-native-community\cli-platform-android\build\commands\runAndroid\runOnAllDevices.js:75:39)
    at buildAndRun (C:\Users\Windows\Desktop\IOM\node_modules\@react-native-community\cli-platform-android\build\commands\runAndroid\index.js:169:41)
    at then.result (C:\Users\Windows\Desktop\IOM\node_modules\@react-native-community\cli-platform-android\build\commands\runAndroid\index.js:135:12)
    at process._tickCallback (internal/process/next_tick.js:68:7)