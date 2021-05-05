(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{442:function(e,t,a){e.exports=a.p+"assets/img/AF-PL1.75bd8131.png"},544:function(e,t,a){"use strict";a.r(t);var o=a(45),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"physical-worker-node-labeling-in-hpe-ezmeral-container-platform"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#physical-worker-node-labeling-in-hpe-ezmeral-container-platform"}},[e._v("#")]),e._v(" Physical Worker Node Labeling in HPE Ezmeral Container Platform")]),e._v(" "),o("p",[e._v("Discovering the node properties and advertising them through node labels can be used to control workload placement in a Kubernetes cluster. With the HPE Ezmeral Container Platform running on HPE server platforms, organizations can automate the discovery of hardware properties and use that information to schedule workloads that benefit from the different capabilities that the underlying hardware provides.")]),e._v(" "),o("p",[e._v("HPE Ezmeral Container Platform node labeling can be applied to group nodes based on the underlying features of the nodes. By default, every node will have its node name as a label. The following properties can be used to label nodes:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v('Overall health status of the node: If current status of "BIOS, Fans, Temperature Sensors, Battery, Processor, Memory, Network, and Storage" is ok, node health status is labeled as "Ok". Otherwise, it will appear as "Degraded".')])]),e._v(" "),o("li",[o("p",[e._v('Overall security status of the node: If the current status of the following BIOS configuration items (which are important forsecurity) are as expected, then security status of the node is "Ok". Otherwise, they will be labeled as "Degraded".')])]),e._v(" "),o("li",[o("p",[e._v("Custom Labeling: User defined labels (key, value) are assigned to desired physical worker nodes. Users can use these Python scripts to retrieve the properties of the underlying hardware and then decide on required labels that should be assigned to each physical worker nodes.")])])]),e._v(" "),o("p",[e._v("Node labeling can be broken down into 4 main phases:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Setting up of the installer VM environment")])]),e._v(" "),o("li",[o("p",[e._v("Updating the input files with the server information")])]),e._v(" "),o("li",[o("p",[e._v("Execution of the python scripts")])]),e._v(" "),o("li",[o("p",[e._v("Verification of the pod scheduling")])])]),e._v(" "),o("p",[e._v("Below figure shows High Level steps of Node Labeling")]),e._v(" "),o("p",[o("img",{attrs:{src:a(442),alt:""}})]),e._v(" "),o("p",[e._v("Steps to perform Node Labeling:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Update the config.json and the hosts.json inventory file which will be used by the HPE Ezmeral Container Platform to reference the physical worker nodes.")])]),e._v(" "),o("li",[o("p",[e._v("Set up utility libraries for interfacing and managing components of HPE ProLiant Servers.")])])]),e._v(" "),o("ul",[o("li",[o("p",[e._v("proliantutils==2.9.2")])]),e._v(" "),o("li",[o("p",[e._v("sushy==3.0.0")])])]),e._v(" "),o("ol",{attrs:{start:"3"}},[o("li",[e._v("Execute the python3 script using the command")])]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("    "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" python physical_node_labelling.py\n")])])]),o("ol",{attrs:{start:"4"}},[o("li",[e._v("Apply the health, security and custom labels to the nodes.")])]),e._v(" "),o("p",[e._v("Verify Pod Scheduling using Node Selector:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("View the labels of all the nodes")])]),e._v(" "),o("li",[o("p",[e._v("Select a label you wish to deploy the workload on")]),e._v(" "),o("p",[e._v('Eg. "health=OK"')])]),e._v(" "),o("li",[o("p",[e._v('Deploy sample application with nodeSelector value "health=OK"')])]),e._v(" "),o("li",[o("p",[e._v("Check if pod is deployed on the required node.")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);