Olá!

Resolvi novamente publicar o projeto que estou trabahando, porque estou tendo muita dificuldade de instalação do react-native-camera no projeto. Portanto, espero que neste caso eu possa solucionar, segui as orientações da aula e abaixo esta a descrição do erro que esta neste aparecendo.Ha diferença entre o video de aula e algumas descrições no build.grandle do android e bom verificar, o ultimo erro haver com react-gradle linha 193 do node-modules.


info Running jetifier to migrate libraries to AndroidX. You can disable it using "--no-jetifier" flag.
Jetifier found 978 file(s) to forward-jetify. Using 4 workers...
info JS server already running.
info Installing the app...

FAILURE: Build failed with an exception.

* Where:
Script 'C:\Users\Windows\Desktop\IOM\node_modules\react-native\react.gradle' line: 193

* What went wrong:
A problem occurred configuring project ':app'.
> Could not get unknown property 'mergeResourcesProvider' for object of type com.android.build.gradle.internal.api.ApplicationVariantImpl.

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 6s

error Failed to install the app. Make sure you have the Android development environment set up: https://facebook.github.io/react-native/docs/getting-started.html#android-development-environment. Run CLI with --verbose flag for more details.
Error: Command failed: gradlew.bat app:installDebug -PreactNativeDevServerPort=8081

FAILURE: Build failed with an exception.

* Where:
Script 'C:\Users\Windows\Desktop\IOM\node_modules\react-native\react.gradle' line: 193

* What went wrong:
A problem occurred configuring project ':app'.
> Could not get unknown property 'mergeResourcesProvider' for object of type com.android.build.gradle.internal.api.ApplicationVariantImpl.

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 6s

    at checkExecSyncError (child_process.js:616:11)
    at execFileSync (child_process.js:634:13)
    at runOnAllDevices (C:\Users\Windows\Desktop\IOM\node_modules\@react-native-community\cli-platform-android\build\commands\runAndroid\runOnAllDevices.js:75:39)
    at buildAndRun (C:\Users\Windows\Desktop\IOM\node_modules\@react-native-community\cli-platform-android\build\commands\runAndroid\index.js:169:41)
    at then.result (C:\Users\Windows\Desktop\IOM\node_modules\@react-native-community\cli-platform-android\build\commands\runAndroid\index.js:135:12)
    at process._tickCallback (internal/process/next_tick.js:68:7)