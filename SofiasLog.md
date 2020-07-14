<!-- 
------------------------------------------------------ July 13, 3:30 pm

Action: 

Copied App.js content from Rachel's Waterly 

Error: 

@react-navigation/stack and @react-navigation/native not installed

Solution:
Installed peer dependencies manually

npm install @react-navigation/stack  @react-navigation/native etc.


------------------------------------------------------ July 13, 2:00 pm 
Action: 

Ran 'npx react-native run-ios'

Error: 

Error Failed to build iOS project. We ran "xcodebuild" command but it exited with error code 65. To debug build logs further, consider building your app with Xcode.app, by opening WateringCan.xcworkspace.

Solution:

'pod install' inside ios file

Next time it worked, although it still took a long time for first build

 -->