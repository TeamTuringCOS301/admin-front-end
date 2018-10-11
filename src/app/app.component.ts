import { Component, ViewChild } from '@angular/core';
import { Platform, App, MenuController, IonicApp, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BackbuttonService } from "../services/backbutton.service";
import { Globals, EN_TAB_PAGES } from "../app-config";
import { TabsPage } from "../pages/tabs/tabs";
import { LoginPage } from "../pages/login/login";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = "LoginPage";
  pages: Array<{ title: string; component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private _app: App, private _ionicApp: IonicApp, private menu: MenuController, private backbuttonService: BackbuttonService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    //this.registerBackButton();
    this.setupBackButtonBehavior();
  }

  /*registerBackButton() {
    this.platform.registerBackButtonAction(() => {
      let toast = this.toastController.create({
        message: "Back button pushed!",

        duration: 1000,

        dismissOnPageChange: false,
        position: "middle",
        cssClass:"my-toast",
      });

      toast.present();

      if (this.menu.isOpen()) {
        console.log("Menu is open!", "loggedInMenu");
        this.menu.close();
        console.log("this.menu.isOpen(): " + JSON.stringify(this.menu.isOpen()));
        return;
      }
      console.log("Checking for other pages");

      let checkHomePage = true;
      let max = Globals.navCtrls.length;
      for (let i = 0; i < Globals.navCtrls.length; i++) {
        let n = Globals.navCtrls[i];
        if (n) {
          if (n.canGoBack()) {
            console.log("Breaking the loop i: " + JSON.stringify(i));
            let navParams = n.getActive().getNavParams();
            if (navParams) {
              console.log("navParams exists");
              let resolve = navParams.get("resolve");
              if (resolve) {
                n.pop().then(() => resolve({}));
              } else {
                n.pop();
              }
            } else {
              n.pop();
            }
            checkHomePage = false;
            return;
          }
        } else console.log("n was null!");
      }

      if (this.nav.getActive().instance instanceof TabsPage) {
        let popPageVal = this.backbuttonService.popPage();
        console.log("popPageVal: " + JSON.stringify(popPageVal));
        if (popPageVal >= 0) {
          console.log("Switching the tab to: ", popPageVal);
          this.switchTab(popPageVal);
        } else {
          console.log("Last page is HomePage");
        }
      } else {
        console.log("Last page is not HomePage");
        if (this.nav.canGoBack()) {
          console.log("We can go back!");
          this.nav.pop();
        }
      }
    });
  }*/

  switchTab(tabIndex) {
    if (Globals.tabs && tabIndex >= 0) {
      console.log("Switch condition met");
      Globals.tabIndex = tabIndex;
      Globals.tabs.select(tabIndex);
      Globals.tabs.selectedIndex = tabIndex;
    }
  }

  setupBackButtonBehavior() {

    // If on web version (browser)
    
    if (window.location.protocol !== "file:") {

      // Register browser back button action(s)
      window.onpopstate = (evt) => {
        // Navigate back
        console.log("Event:" + evt);
        if (this.nav.getActive().instance instanceof TabsPage) {
          let popPageVal = this.backbuttonService.popPage();
          console.log("popPageVal: " + JSON.stringify(popPageVal));
          if (popPageVal >= 0) {
            console.log("Switching the tab to: ", popPageVal);
            this.switchTab(popPageVal);
          } else {
            console.log("Last page is HomePage");
          }
        }
      }
    };
  }

}
