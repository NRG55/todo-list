(()=>{"use strict";class s{constructor(s){this.name=s,this.tasks=[]}setTask(s){this.tasks=s}}console.log("Hey");let t=new class{constructor(){this.projects=[],this.projects.push(new s("Test Project"))}};console.log(t);let e=new s("Test Project 2");e.setTask("Do the test"),console.log(e)})();