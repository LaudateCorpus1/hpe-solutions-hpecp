(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{387:function(a,t,e){a.exports=e.p+"assets/img/AF-EN1.86e56bd8.png"},388:function(a,t,e){a.exports=e.p+"assets/img/AF-EN2.acb37c5c.png"},389:function(a,t,e){a.exports=e.p+"assets/img/AF-EN3.4e1b0376.png"},538:function(a,t,e){"use strict";e.r(t);var s=e(45),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"external-load-balancing-using-nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#external-load-balancing-using-nginx"}},[a._v("#")]),a._v(" External Load Balancing using NGINX")]),a._v(" "),s("p",[a._v("Following steps are to deploy NGINX load balancer on preconfigured HPECP cluster with HA.")]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("Pre-requisite")]),a._v(" "),s("ul",[s("li",[a._v("HPECP Controller setup and Gateway with HA")])])]),a._v(" "),s("h3",{attrs:{id:"deployment-process"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deployment-process"}},[a._v("#")]),a._v(" Deployment Process")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("Install nginx on the separate VM with CentOS 7")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" yum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -y nginx\n")])])])]),a._v(" "),s("li",[s("p",[a._v('Create a " '),s("em",[a._v('load-balancer.conf"')]),a._v(" file in the following path "),s("em",[a._v("/etc/nginx/conf.d:")])])])]),a._v(" "),s("p",[a._v("Sample load-balancer configuration file")]),a._v(" "),s("p",[s("img",{attrs:{src:e(387),alt:""}})]),a._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[s("p",[a._v("Change the permissions for the load-balancer.conf file.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" 0777 /etc/nginx/conf.d/load-balancer.conf\n")])])])]),a._v(" "),s("li",[s("p",[a._v("If you have trouble loading the page, check firewall is not blocking your connection. For example: on CentOS 7 the default firewall rules do not allow HTTP traffic, enable it with the commands below.")])])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" firewall-cmd --add-service"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("http --permanent\n\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" firewall-cmd --reload\n")])])]),s("ol",{attrs:{start:"5"}},[s("li",[s("p",[a._v("Comment out the existing server information details in the "),s("em",[a._v("/etc/nginx/nginx.conf")]),a._v(" file as shown below.")]),a._v(" "),s("p",[s("img",{attrs:{src:e(388),alt:""}})])]),a._v(" "),s("li",[s("p",[a._v("Restart and enable nginx service:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" systemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" nginx.service**\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" systemctl restart nginx.service**\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" systemctl status nginx.service**\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("NOTE")]),a._v(" "),s("p",[a._v("NGINX service should be Active and running.")])])]),a._v(" "),s("li",[s("p",[a._v("Navigate to the NGINX configured IP on browser and HPECP gateway page should come up:")]),a._v(" "),s("p",[s("img",{attrs:{src:e(389),alt:""}})])]),a._v(" "),s("li",[s("p",[a._v("Logs can be checked in following path CLI "),s("em",[a._v("/var/log/nginx")]),a._v(" on nginx server.")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);