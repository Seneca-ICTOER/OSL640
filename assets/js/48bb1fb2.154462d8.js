"use strict";(self.webpackChunkOSL640=self.webpackChunkOSL640||[]).push([[2],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var s=n.createContext({}),u=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},p=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,o=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),c=u(a),d=i,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return a?n.createElement(h,r(r({ref:e},p),{},{components:a})):n.createElement(h,r({ref:e},p))}));function d(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=a.length,r=new Array(o);r[0]=c;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:i,r[1]=l;for(var u=2;u<o;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4277:function(t,e,a){a.r(e),a.d(e,{assets:function(){return s},contentTitle:function(){return r},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var n=a(3117),i=(a(7294),a(3905));const o={id:"tutorial7",title:"Tutorial 7 - Installing Linux, Live Linux, and Virtualization",sidebar_position:7,description:"Tutorial 7 - Installing Linux, Live Linux, and Virtualization"},r="Tutorial 7 - Installing Linux, Live Linux, and Virtualization",l={unversionedId:"A-Tutorials/tutorial7",id:"A-Tutorials/tutorial7",title:"Tutorial 7 - Installing Linux, Live Linux, and Virtualization",description:"Tutorial 7 - Installing Linux, Live Linux, and Virtualization",source:"@site/docs/A-Tutorials/tutorial7.md",sourceDirName:"A-Tutorials",slug:"/A-Tutorials/tutorial7",permalink:"/OSL640/A-Tutorials/tutorial7",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/OSL640/tree/main/docs/A-Tutorials/tutorial7.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"tutorial7",title:"Tutorial 7 - Installing Linux, Live Linux, and Virtualization",sidebar_position:7,description:"Tutorial 7 - Installing Linux, Live Linux, and Virtualization"},sidebar:"courseNotesSidebar",previous:{title:"Tutorial 6 - File Transfer and Sending Email Messages",permalink:"/OSL640/A-Tutorials/tutorial6"},next:{title:"Tutorial 8 - Links and Process Management",permalink:"/OSL640/A-Tutorials/tutorial8"}},s={},u=[{value:"Main Objectives of this Tutorial",id:"main-objectives-of-this-tutorial",level:2},{value:"Tutorial Reference Material",id:"tutorial-reference-material",level:2},{value:"KEY CONCEPTS",id:"key-concepts",level:2},{value:"Installing Linux",id:"installing-linux",level:3},{value:"Linux Installation Methods",id:"linux-installation-methods",level:3},{value:"Investigation 1: Creating A Red Hat Account And Downloading The ISO",id:"investigation-1-creating-a-red-hat-account-and-downloading-the-iso",level:2},{value:"Investigation 2: Creating A Virtual Machine In VMWare And Installing Red Hat Enterprise Linux",id:"investigation-2-creating-a-virtual-machine-in-vmware-and-installing-red-hat-enterprise-linux",level:2},{value:"Investigation 3: Installing The Global Protect VPN And Connecting To Matrix From Your Virtual Machine",id:"investigation-3-installing-the-global-protect-vpn-and-connecting-to-matrix-from-your-virtual-machine",level:2},{value:"Linux Practice Questions",id:"linux-practice-questions",level:2}],p={toc:u};function m(t){let{components:e,...o}=t;return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tutorial-7---installing-linux-live-linux-and-virtualization"},"Tutorial 7 - Installing Linux, Live Linux, and Virtualization"),(0,i.kt)("h2",{id:"main-objectives-of-this-tutorial"},"Main Objectives of this Tutorial"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Download and install the ",(0,i.kt)("strong",{parentName:"li"},"VirtualBox")," VM software application"),(0,i.kt)("li",{parentName:"ul"},"Download and install ",(0,i.kt)("strong",{parentName:"li"},"Red Hat Enterprise Linux (RHEL)")," in a virtual machine"),(0,i.kt)("li",{parentName:"ul"},"Open a terminal and connect to your Matrix account via the ",(0,i.kt)("strong",{parentName:"li"},"ssh")," utility"),(0,i.kt)("li",{parentName:"ul"},"Run several ",(0,i.kt)("strong",{parentName:"li"},"open-source applications")," in your graphical RHEL environment")),(0,i.kt)("h2",{id:"tutorial-reference-material"},"Tutorial Reference Material"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Lecture Slides:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Week 7 Lecture Slides: ",(0,i.kt)("a",{target:"_blank",href:a(2516).Z},"PDF")," ","|"," ",(0,i.kt)("a",{target:"_blank",href:a(7113).Z},"PPTX"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Installing Linux:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"th",href:"https://www.linux.com/training-tutorials/linux-installation-choices/"},"Linux Installation Choices")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"th",href:"https://en.wikipedia.org/wiki/Live_CD"},"Live Linux Definition")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"th",href:"https://en.wikipedia.org/wiki/Virtualization"},"Virtualization Definition")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"th",href:"https://en.wikipedia.org/wiki/Optical_disc_image"},"ISO Definition")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"th",href:"https://en.wikipedia.org/wiki/Virtual_private_network"},"VPN Definition"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Commands:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://man7.org/linux/man-pages/man8/sudo.8.html"},"sudo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://man7.org/linux/man-pages/man8/ping.8.html"},"ping")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://man7.org/linux/man-pages/man8/dnf.8.html"},"dnf"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Red Hat Resources:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.redhat.com/en"},"Red Hat Website")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/"},"Red Hat Documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://sso.redhat.com/auth/realms/redhat-external/protocol/openid-connect/registrations?client_id=https%3A%2F%2Fwww.redhat.com%2Fwapps%2Fugc-oidc&redirect_uri=https%3A%2F%2Fwww.redhat.com%2Fwapps%2Fugc%2Fprotected%2Faccount.html&response_type=code&scope=openid"},"Red Hat Registration Page"))),(0,i.kt)("h2",{id:"key-concepts"},"KEY CONCEPTS"),(0,i.kt)("h3",{id:"installing-linux"},"Installing Linux"),(0,i.kt)("p",null,"Having a Linux system on your home computer provides ",(0,i.kt)("strong",{parentName:"p"},"access")," to a large selection of ",(0,i.kt)("strong",{parentName:"p"},"open source software"),"."),(0,i.kt)("p",null,"Installing your own version of Linux on your notebook or desktop computer also can make it easier to practice workingin the Linux environment and ",(0,i.kt)("strong",{parentName:"p"},"learn")," how to perform routine ",(0,i.kt)("strong",{parentName:"p"},"Linux OS administration tasks"),"."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"A ",(0,i.kt)("strong",{parentName:"em"},"Linux distribution")," (often abbreviated as distro) is an operating system made from a software collection that is based upon the Linux kernel and, often, a package management system. Linux users usually obtain their operating system by downloading one of the Linux distributions, which are available for a wide variety of systems...")),(0,i.kt)("p",null,"Reference: ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Linux_distribution"},"https://en.wikipedia.org/wiki/Linux_distribution")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Common Linux Distributions",src:a(5405).Z,width:"1506",height:"606"})),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Steps in the Linux Installation Process:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Select")," a ",(0,i.kt)("em",{parentName:"li"},"Linux Distribution")," to ",(0,i.kt)("strong",{parentName:"li"},"download")," (ISO image file or VM file)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Create")," VM and ",(0,i.kt)("strong",{parentName:"li"},"install")," Linux Distribution or ",(0,i.kt)("strong",{parentName:"li"},"run")," VM file.")),(0,i.kt)("h3",{id:"linux-installation-methods"},"Linux Installation Methods"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Standalone Installation")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Linux is the only OS on the computer."),(0,i.kt)("li",{parentName:"ul"},"Any existing data on your hard disk will be ",(0,i.kt)("strong",{parentName:"li"},"erased"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Stand Alone Linux",src:a(971).Z,width:"458",height:"254"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Dual-boot / Multi-boot Installation")),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"boot menu")," allows the user to select the desired OS."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Advantages")," of Dual-Boot or Multi-Boot:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"This option provides a method to access your computer if one OS ",(0,i.kt)("strong",{parentName:"li"},"fails to boot-up"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Access the Windows partition")," if your Windows OS cannot boot-up."),(0,i.kt)("li",{parentName:"ol"},"This booting method is great for ",(0,i.kt)("strong",{parentName:"li"},"troubleshooting")," (",(0,i.kt)("em",{parentName:"li"},"for example"),": boot into Linux OS to eliminate a hardware issue).")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Installation Tips:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"It is recommended to ",(0,i.kt)("strong",{parentName:"li"},"back up important data")," before proceeding."),(0,i.kt)("li",{parentName:"ol"},"It is recommended to ",(0,i.kt)("strong",{parentName:"li"},"install the Linux OS last"),", as other operating systems may not offer a multi-boot option.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Grub Boot Menu",src:a(7570).Z,width:"1378",height:"764"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Virtual Machine Installation")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Virtualization is the process of running a virtual instance of a computer system in a layer abstracted from the actual hardware"),". Reference: ",(0,i.kt)("a",{parentName:"p",href:"https://opensource.com/resources/virtualization"},"https://opensource.com/resources/virtualization")),(0,i.kt)("p",null,"The virtualized OS is installed and run in a window under another OS. Special software is used to manage the entire process, referred to as the ",(0,i.kt)("strong",{parentName:"p"},"hypervisor"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Vm Player Menu",src:a(9733).Z,width:"914",height:"686"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Advantages")," of Virtualization:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"You can run VM from an ",(0,i.kt)("strong",{parentName:"li"},"ISO image file")," or a ",(0,i.kt)("strong",{parentName:"li"},"VM file"),"."),(0,i.kt)("li",{parentName:"ol"},"One or more virtual machines can be run at the same time."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("strong",{parentName:"li"},"guest")," OS ",(0,i.kt)("strong",{parentName:"li"},"shares hardware")," with the ",(0,i.kt)("strong",{parentName:"li"},"host")," OS and possibly other virtualized systems."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("strong",{parentName:"li"},"guest")," systems have ",(0,i.kt)("strong",{parentName:"li"},"network access")," through the host.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Installation Tips:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Virtualization requires a ",(0,i.kt)("strong",{parentName:"p"},"compatible processor"),": not all processors support that feature.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Your ",(0,i.kt)("strong",{parentName:"p"},"BIOS")," should be set to ",(0,i.kt)("strong",{parentName:"p"},"enable Virtualization"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Popular VM software for ",(0,i.kt)("strong",{parentName:"p"},"Windows"),", ",(0,i.kt)("strong",{parentName:"p"},"Apple")," and ",(0,i.kt)("strong",{parentName:"p"},"Linux")," OS include:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"VMware"),(0,i.kt)("li",{parentName:"ul"},"Oracle Virtual Box")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Live Linux CD")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"A live CD (also live DVD, live disc, or live operating system) is a complete bootable computer installation including operating system which runs directly from a CD-ROM or similar storage device into a computer's memory, rather than loading from a hard disk drive. A Live CD allows users to run an operating system for any purpose without installing it or making any changes to the computer's configuration. You can also create a Live USB, which depending on the configuration and USB size may also allow saving data back to the USB (unlike a Live CD/DVD).")," Reference: ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Live_CD"},"https://en.wikipedia.org/wiki/Live_CD")),(0,i.kt)("h2",{id:"investigation-1-creating-a-red-hat-account-and-downloading-the-iso"},"Investigation 1: Creating A Red Hat Account And Downloading The ISO"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ATTENTION: The due date for successfully completing this tutorial (i.e. tutorial 7) is by Wednesday, December 13 @ 11:59 PM (Week 14).")),(0,i.kt)("p",null,"In this investigation, you will first create a Red Hat account and download the install medium (ISO). This is required to install Red Hat as a virtual machine in INVESTIGATION 2. Be sure to remember your login and password."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Navigate to ",(0,i.kt)("a",{parentName:"li",href:"https://www.redhat.com/en"},"Red Hat's website")," (click on the link).")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Red Hat Website",src:a(9527).Z,width:"1902",height:"1074"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"On the top right side, click Login and select Register Now. You should see the following screen.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Red Hat Create Account",src:a(3105).Z,width:"594",height:"930"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("strong",{parentName:"p"},"Personal")," as your account type and fill in your information. You may choose your own Red Hat login. When you are done click ",(0,i.kt)("strong",{parentName:"p"},"CREATE MY ACCOUNT"),"."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Note: You may wish to use a personal email in creating your account so you always have access to it."),(0,i.kt)("li",{parentName:"ul"},"You may need this account for future courses."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Login to the email account you used to sign up with and confirm it. You should see the following screen (for your account)."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Red Hat Login",src:a(6631).Z,width:"1600",height:"1200"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to the ",(0,i.kt)("a",{parentName:"li",href:"https://developers.redhat.com/"},"Red Hat Developers Portal"),". Login with your new account and accept all terms and conditions."),(0,i.kt)("li",{parentName:"ul"},"Go back to the ",(0,i.kt)("a",{parentName:"li",href:"https://www.redhat.com/"},"Red Hat website"),", login and click on ",(0,i.kt)("strong",{parentName:"li"},"Customer Portal"),". You should see the following screen.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Red Hat Customer Portal",src:a(4379).Z,width:"1600",height:"1200"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Scroll down until you see Download Software. Click Download software. You should see the following screen.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Red Hat Downloads",src:a(736).Z,width:"1600",height:"1200"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Click the arrow (highlighted in the previous screenshot) beside "Red Hat Enterprise Linux". Then select Download latest. It will take you to a download page (depicted below). Find the Full installation image. It should be labelled "Red Hat Enterprise 9.1 Binary DVD". Click "Download Now". See the below screenshot for reference. Note: Downloading may take some time depending on the speed of your Internet connection.')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Red Hat Download",src:a(717).Z,width:"1600",height:"1200"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Once your ISO has finished downloading you may proceed to Investigation 2.")),(0,i.kt)("h2",{id:"investigation-2-creating-a-virtual-machine-in-vmware-and-installing-red-hat-enterprise-linux"},"Investigation 2: Creating A Virtual Machine In VMWare And Installing Red Hat Enterprise Linux"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ATTENTION: You should already have VMWare Workstation installed from OSM620. If you do not, refer to OSM640 wk1 PreLab. ")),(0,i.kt)("p",null,"In this investigation you will be creating a new virtual machine in VMWare Workstation and installing Red Hat Enterprise Linux 9. Keep this virtual machine (VM) after completing Tutorial 7 as you will require it for your Project."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Launch VMware Workstation, and select ",(0,i.kt)("strong",{parentName:"li"},"Create a New Virtual Machine"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VMWare Workstation",src:a(3218).Z,width:"1920",height:"1080"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Select ",(0,i.kt)("strong",{parentName:"li"},"Typical (recommended)")," and click next.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VM Machine Installation",src:a(2988).Z,width:"707",height:"707"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Select ",(0,i.kt)("strong",{parentName:"li"},"Use ISO image")," and browse to the Red Hat ISO you downloaded in ",(0,i.kt)("strong",{parentName:"li"},"INVESTIGATION 1"),". Click ",(0,i.kt)("strong",{parentName:"li"},"next"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ISO Image",src:a(7476).Z,width:"690",height:"684"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enter your ",(0,i.kt)("strong",{parentName:"li"},"Seneca ID")," for user name, and the password ",(0,i.kt)("strong",{parentName:"li"},"P@ssW0rd"),", then click ",(0,i.kt)("strong",{parentName:"li"},"Next"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VM Install Login",src:a(8005).Z,width:"698",height:"702"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Set the name to ",(0,i.kt)("strong",{parentName:"li"},"RHEL")," (this is a common acronym for Red Hat Enterprise Linux), accept the default location and click ",(0,i.kt)("strong",{parentName:"li"},"Next"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VM Install Name",src:a(9122).Z,width:"688",height:"708"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Accept the defaults and click ",(0,i.kt)("strong",{parentName:"li"},"Next"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VM Install Size",src:a(3752).Z,width:"701",height:"706"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You should see the following screen. If everything looks correct, click ",(0,i.kt)("strong",{parentName:"li"},"Finish"),". Note: Your VM will begin installing RHEL once it boots up. This may take a while. When the install finishes, it will reboot.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VM Install Summary",src:a(9350).Z,width:"654",height:"690"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Once your VM has rebooted, you should see a login screen similar to the following.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VM Login",src:a(7453).Z,width:"1904",height:"1062"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Login to your RedHat Virtual Machine. You will immediately be prompted to register your system, as shown below.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Red Hat Register System",src:a(6585).Z,width:"1919",height:"1076"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Click Register..."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Leave the defaults and login with the Red Hat Account you created in Investigation 1."),(0,i.kt)("li",{parentName:"ul"},"Your system should now show as a Registered System at the bottom of the window."),(0,i.kt)("li",{parentName:"ul"},"If you receive an error indicating you must accept the terms and conditions to continue, manually accept them by clicking on ",(0,i.kt)("a",{parentName:"li",href:"https://www.redhat.com/wapps/tnc/standalone/ea"},"this link"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Click Date & Time. You should see the following screen."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Red Hat Set Date and Time",src:a(5073).Z,width:"1911",height:"1073"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Unlock")," and login with your Administrator password (it should be ",(0,i.kt)("strong",{parentName:"li"},"P@ssW0rd"),")."),(0,i.kt)("li",{parentName:"ul"},"Click on the ",(0,i.kt)("strong",{parentName:"li"},"Time Zone"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Red Hat Time Zone Map",src:a(184).Z,width:"1920",height:"1059"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Search Box")," type ",(0,i.kt)("strong",{parentName:"li"},"Toronto"),". Accept the auto complete and click the x on the window."),(0,i.kt)("li",{parentName:"ul"},"Close the window by clicking the x in the corner."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Getting Started")," window offers help on performing common tasks. Feel free to look around and familiarise yourself with these. When you are done, close the window by clicking the x in the corner."),(0,i.kt)("li",{parentName:"ul"},"Leave your VM powered on and proceed to Investigation 3.")),(0,i.kt)("h2",{id:"investigation-3-installing-the-global-protect-vpn-and-connecting-to-matrix-from-your-virtual-machine"},"Investigation 3: Installing The Global Protect VPN And Connecting To Matrix From Your Virtual Machine"),(0,i.kt)("p",null,"Installing software in Linux requires both an active Internet connection and knowledge of which package management tool to use for your distribution (or distro). Linux software and updates come from special sources hosted on other servers, known as repositories (or repos). All the major Linux distros host their own repos, though anyone can host a repository for a distribution - and many organizations do. Due to the Open Source nature of Linux, certain repos may contain specialized software that is not available in the main repository (such as EPEL - Extra Packages for Enterprise Linux); or they may contain a mirror of the main repo."),(0,i.kt)("p",null,"Accessing these and installing software requires using your Linux distro's command line package management tool. The major ones you will encounter when you use Linux are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://man7.org/linux/man-pages/man5/dnf.conf.5.html"},"DNF")," (Dandified Yum) - Which is an update of YUM (Yellowdog Updater, Modified). Both of these operate as a front end for ",(0,i.kt)("a",{parentName:"li",href:"https://man7.org/linux/man-pages/man8/rpm.8.html"},"RPM (Red Hat Package Manager)"),". These are used in Red Hat based Linux distros, such as Red Hat Enterprise Linux and Fedora. The advantages of DNF and YUM over RPM is that they resolve dependencies (meaning if the software you are installing requires other software, they will install that as well). RPM does not do this, which can lead to a term known in industry as dependency hell."),(0,i.kt)("li",{parentName:"ul"},"APT or ",(0,i.kt)("a",{parentName:"li",href:"https://linux.die.net/man/8/apt-get"},"APT-GET")," (Aptitude Package Manager). This is used in Debian based Linux distributions such as Linux Mint, Ubuntu and Kali Linux."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://archlinux.org/pacman/pacman.8.html"},"Pacman")," (Pacman Package Manager). This is used in Arch Linux, as well as a few others."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.unix.com/man-page/suse/8/zypper/"},"Zypper")," Package Manager. This is used in OpenSUSE, which is popular for use on servers in Europe.")),(0,i.kt)("p",null,"Since we are using Red Hat Enterprise Linux (or RHEL), we will be using DNF to install software."),(0,i.kt)("p",null,"Your first step to installing software should always be to test your Internet connectivity, as without a working connection you cannot resolve anything. To do this we can use the tool ",(0,i.kt)("strong",{parentName:"p"},"ping"),", which is commonly used to troubleshoot network connectivity issues."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on Activities in the top left corner of your RHEL VM (right next to the tiny Red Hat) and launch the Terminal application.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Red Hat Terminal Application",src:a(7165).Z,width:"1917",height:"1079"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enter the command ",(0,i.kt)("inlineCode",{parentName:"li"},"ping www.google.com")),(0,i.kt)("li",{parentName:"ul"},"This should succeed. If it fails, you may need to troubleshoot network issues. Ask your professor for assistance. Press ",(0,i.kt)("strong",{parentName:"li"},"ctrl + c")," at the same time to kill this process."),(0,i.kt)("li",{parentName:"ul"},"While you can switch to the ",(0,i.kt)("strong",{parentName:"li"},"root")," user in your VM and install software, it's a bad practice to do this. In industry, admins are commonly granted permissions through ",(0,i.kt)("strong",{parentName:"li"},"sudo"),'; which stands for "superuser do". This is similar to run as administrator in Windows. Sudo can be configured to allow users elevated privileges to a subset of commands, or all commands. Additionally, usage is logged to the appropriate user. This makes tracking the activity of a system with many administrators a lot easier. When you initially installed RHEL, you did not set up sudo. We will do so now.'),(0,i.kt)("li",{parentName:"ul"},"Initially you will have to switch to root to configure sudo. Do this by issuing the command ",(0,i.kt)("inlineCode",{parentName:"li"},"su -")),(0,i.kt)("li",{parentName:"ul"},"You should see your prompt change to ",(0,i.kt)("strong",{parentName:"li"},"[","root@localhost ~","]","#"),". Now issue the command ",(0,i.kt)("inlineCode",{parentName:"li"},"visudo")),(0,i.kt)("li",{parentName:"ul"},"This will allow you to edit the /etc/sudoers file and add the user you created when you installed RHEL. visudo works like using vi, except it checks the file to ensure the syntax is correct. If it is not, it will give you a warning. This is an extremely useful tool. Find the line that reads as follows:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"   root ALL=(ALL) ALL\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This means that root is allowed to run from any terminal (first all), acting as any user (second all), and execute any command (third all). Below this line, add the following (substituting your username where appropriate). Be sure to enter insert mode by pressing the letter ",(0,i.kt)("strong",{parentName:"li"},"i"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"   senecaid ALL=ALL\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When you are done, press ",(0,i.kt)("strong",{parentName:"li"},"esc")," followed by ",(0,i.kt)("strong",{parentName:"li"},":x")," to save your changes. This should return you to your command prompt. We want to test our elevated privileges from our regular user, so return to your normal prompt by typing ",(0,i.kt)("inlineCode",{parentName:"li"},"exit")),(0,i.kt)("li",{parentName:"ul"},"Now we are going to update our operating system. To do this, issue the command ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo dnf -y update")),(0,i.kt)("li",{parentName:"ul"},"You may be prompted for your password. The inclusion of the ",(0,i.kt)("strong",{parentName:"li"},"-y")," option, auto assumes yes to prompts (this can be very handy). The update process may take a while. Do not interrupt it."),(0,i.kt)("li",{parentName:"ul"},"Download the package required to connect to ",(0,i.kt)("a",{parentName:"li",href:"https://students.senecacollege.ca/spaces/186/it-services/wiki/view/1027/vpn-clients"},"Seneca's VPN here")," (click on the link for ",(0,i.kt)("strong",{parentName:"li"},"Linux GlobalProtect Agent"),". You may have to enter your Seneca username and password."),(0,i.kt)("li",{parentName:"ul"},"Open your ",(0,i.kt)("strong",{parentName:"li"},"Terminal")," (cli) and change to your downloads folder ",(0,i.kt)("inlineCode",{parentName:"li"},"cd Downloads")),(0,i.kt)("li",{parentName:"ul"},"Type ",(0,i.kt)("strong",{parentName:"li"},"ls")," to confirm your download is there. It should look something like ",(0,i.kt)("strong",{parentName:"li"},"PanGPLinux-5.3.3-c4.tgz")),(0,i.kt)("li",{parentName:"ul"},"The .tgz extension indicates the file is a tar that has been compressed with gzip. Extract it by issuing ",(0,i.kt)("inlineCode",{parentName:"li"},"tar xvf PanGPLinux-5.3.3-c4.tgz")),(0,i.kt)("li",{parentName:"ul"},"Type ",(0,i.kt)("strong",{parentName:"li"},"ls")," to confirm the files were extracted. Note all the files ls displays. We are going to install the .rpm, as that is Red Hat's package manager using DNF. Be sure to install the correct RPM (do not the install the one that includes arm in the name)."),(0,i.kt)("li",{parentName:"ul"},"Type the following command to install the file: ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo dnf -y localinstall GlobalProtect_UI_rpm-5.3.3.0-4.rpm"),". ",(0,i.kt)("strong",{parentName:"li"},"Note"),": Your rpm package name might be slightly different as it may be a newer version."),(0,i.kt)("li",{parentName:"ul"},"Now browse to the graphical ",(0,i.kt)("strong",{parentName:"li"},"GlobalProtect")," application and launch it."),(0,i.kt)("li",{parentName:"ul"},"Enter StudentVPN.senecacollege.ca for the portal."),(0,i.kt)("li",{parentName:"ul"},"Enter your credentials when prompted (just like you connect with the Windows or Mac apps)."),(0,i.kt)("li",{parentName:"ul"},"Now you should be able to ssh into Matrix. Test this by issuing the following Linux command ",(0,i.kt)("inlineCode",{parentName:"li"},"ssh yoursenecaid@matrix.senecacollege.ca")),(0,i.kt)("li",{parentName:"ul"},"Enter ",(0,i.kt)("strong",{parentName:"li"},"yes")," to share your public key."),(0,i.kt)("li",{parentName:"ul"},"When prompted, enter your password. Were you able to connect to your Matrix account?"),(0,i.kt)("li",{parentName:"ul"},"Confirm you are in your home directory. What command did you use?"),(0,i.kt)("li",{parentName:"ul"},"Use a ",(0,i.kt)("strong",{parentName:"li"},"text editor")," (nano or vi) to create a file in your current directory called ",(0,i.kt)("strong",{parentName:"li"},"myvm.txt")," and enter the following text:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"}," \nThis is line 1\nThis is line 2\nThis is line 3\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Save and exit the text editor."),(0,i.kt)("li",{parentName:"ul"},"Confirm that you created this file, and confirm the contents are correct."),(0,i.kt)("li",{parentName:"ul"},"Enter the command: ",(0,i.kt)("inlineCode",{parentName:"li"},"~osl640/week7-check-1")," to submit your tutorial."),(0,i.kt)("li",{parentName:"ul"},"Once this succeeds, you may exit and shutdown your vm. note: you can shutdown from the command line by issuing the command: ",(0,i.kt)("strong",{parentName:"li"},"poweroff"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Important: Keep your RHEL VM, as you will need it for your project.")),(0,i.kt)("h2",{id:"linux-practice-questions"},"Linux Practice Questions"),(0,i.kt)("p",null,"The purpose of this section is to obtain extra practice to help with quizzes."),(0,i.kt)("p",null,"Here is a link to the ",(0,i.kt)("a",{target:"_blank",href:a(2065).Z},"MS Word Document of ALL of the questions")," displayed below but with extra room to answer on the document to simulate a quiz:"),(0,i.kt)("p",null,"Your instructor may take-up these questions during class. It is up to the student to attend classes in order to obtain the answers to the following questions. Your instructor will NOT provide these answers in any other form (eg. e-mail, etc)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Review Questions:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Define the term ",(0,i.kt)("strong",{parentName:"li"},"Linux Distribution"),"."),(0,i.kt)("li",{parentName:"ol"},"List and explain ",(0,i.kt)("strong",{parentName:"li"},"two advantages")," of installing a Linux distribution on your home computer or laptop as either the host operating system or as a virtual machine."),(0,i.kt)("li",{parentName:"ol"},"List and explain two things to consider prior to installing a Linux distribution on your home computer."),(0,i.kt)("li",{parentName:"ol"},"Explain why installing ",(0,i.kt)("strong",{parentName:"li"},"Multi-boot")," for Linux is useful for ",(0,i.kt)("strong",{parentName:"li"},"computer troubleshooting"),"."),(0,i.kt)("li",{parentName:"ol"},"Define the term ",(0,i.kt)("strong",{parentName:"li"},"Virtualization"),"."),(0,i.kt)("li",{parentName:"ol"},"List the ",(0,i.kt)("strong",{parentName:"li"},"steps")," to install software or update your RHEL system."),(0,i.kt)("li",{parentName:"ol"},"List ",(0,i.kt)("strong",{parentName:"li"},"4 applications")," that are contained in the Red Hat Enterprise Linux distribution."),(0,i.kt)("li",{parentName:"ol"},"Explain the difference between a ",(0,i.kt)("strong",{parentName:"li"},"Live Linux distribution")," and an ",(0,i.kt)("strong",{parentName:"li"},"installed Linux distribution"),"."),(0,i.kt)("li",{parentName:"ol"},"Define the term '",(0,i.kt)("em",{parentName:"li"},"repo"),". What are repos (repositories) used for? What one did you add to your VM?"),(0,i.kt)("li",{parentName:"ol"},"What is ",(0,i.kt)("strong",{parentName:"li"},"sudo"),"?")))}m.isMDXComponent=!0},2065:function(t,e,a){e.Z=a.p+"assets/files/osl640_week7_practice-c4a7dd411307a21fac3acc4b9cdb272b.docx"},2516:function(t,e,a){e.Z=a.p+"assets/files/OSL640-Week7-632b3e6a33aa30291473889e505eedce.pdf"},7113:function(t,e,a){e.Z=a.p+"assets/files/OSL640-Week7-e2a775cd622d2697646f54c2b9bae85d.pptx"},5073:function(t,e,a){e.Z=a.p+"assets/images/10_-_date_and_time-66373381a10c0e52a39b8bca6200aa0f.jpg"},184:function(t,e,a){e.Z=a.p+"assets/images/11_-_timezone-8706b6365ffdf39485dc0384a05a9685.jpg"},9527:function(t,e,a){e.Z=a.p+"assets/images/1_-_Registering_for_a_Red_Hat_account-24534345a34dbc307875132fa118539b.jpg"},7165:function(t,e,a){e.Z=a.p+"assets/images/1_-_terminal-263ac34e3def902cfd387ac212c4b55b.jpg"},3218:function(t,e,a){e.Z=a.p+"assets/images/1_-_vmware-d4809b9b4035645daa0e54e2ee7b0958.jpg"},3105:function(t,e,a){e.Z=a.p+"assets/images/2_-_Create_a_Red_Hat_account-5c9cfc90a076135d354ffc21310bc328.jpg"},2988:function(t,e,a){e.Z=a.p+"assets/images/2_-_typical-96001e23f79501cdcf4a5381534b8b80.jpg"},6631:function(t,e,a){e.Z=a.p+"assets/images/3_-_Login_to_Red_Hat-90eddf0821329c88a466863570473aab.jpg"},7476:function(t,e,a){e.Z=a.p+"assets/images/3_-_use_iso_image-042ef740d08f2b2b4b5806f714a8b9ff.jpg"},4379:function(t,e,a){e.Z=a.p+"assets/images/4_-_Customer_Portal-8dbef9dba5b5d63fb10c90dc43b4bd01.jpg"},8005:function(t,e,a){e.Z=a.p+"assets/images/4_-_username_and_password-99eb3e4d828a3e0d9d03b2c45fffe4c5.jpg"},736:function(t,e,a){e.Z=a.p+"assets/images/5_-_Downloads-106a31677734b583ace36aa698fa06a0.jpg"},9122:function(t,e,a){e.Z=a.p+"assets/images/5_-_name-576bdb87093332ddeba173d63eee4bd3.jpg"},717:function(t,e,a){e.Z=a.p+"assets/images/6_-_Download_RHEL-25976fbd8454eca12ca7179748a9aa0f.jpg"},3752:function(t,e,a){e.Z=a.p+"assets/images/6_-_defaults-975d96675237c043e6b2c3eb1bc063fe.jpg"},9350:function(t,e,a){e.Z=a.p+"assets/images/7_-_finish-7dfd0547f12f7e627589d2d75bc01601.jpg"},7453:function(t,e,a){e.Z=a.p+"assets/images/8_-_login-955f7f4fc092cb7f27cc5996fdf0b285.jpg"},6585:function(t,e,a){e.Z=a.p+"assets/images/9_-_register-e5eab7adc56b6460278f2545dff68bb3.jpg"},5405:function(t,e,a){e.Z=a.p+"assets/images/Distro-1-c1c4655afebf2dd9df6f17714cd7a40f.png"},7570:function(t,e,a){e.Z=a.p+"assets/images/Grub-boot-menu-ddbaf6048a9e82180d8c018be4fb0d09.png"},971:function(t,e,a){e.Z=a.p+"assets/images/Stand-alone-ee259e5cbbce7923e4b054971c6d7922.png"},9733:function(t,e,a){e.Z=a.p+"assets/images/Vm-player-menu-e2e0a588583ed619c89d426fbdaf4d07.png"}}]);