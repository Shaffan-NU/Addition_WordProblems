(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,n){"use strict";var a=n(10),r=n.n(a),o=new URLSearchParams(window.location.search),s=o.get("limit"),i=o.get("dif"),c=0,l=[],u=function(){console.log(l[c]);var e=0;l[c].attemptedAnswer==l[c].corectAnswer&&(e=1);var t=o.get("limit"),n=o.get("cid"),a=o.get("crcid"),s=o.get("sid"),u=o.get("uid"),m=o.get("id"),d=o.get("type");r.a.ajax({url:"https://nano-softs.com/adaptive/api.php?prb="+l[c].problem+"&aa="+l[c].attemptedAnswer+"&ca="+l[c].corectAnswer+"&tt="+l[c].timeTaken+"&st="+e+"&tkn=f6083658c798db3c3c3227aa5a813c601da7c196fb0871feb0e23bc2528ca35a9253ef957e37d1d7a25e4360a12652ba5493963207def560cd9cab32db8fe0db6602bc278fcfc5be790fb520811d59236734c52e8e25b8dabdece79b16e1815a15bffd16ef0c5e1d46aa9571d6d687d304724f71aa1b06f929ca2b4da5d5add11efa614b69f83ad544bbf2b41c0afe4689c6457f99006d5943affd31ea6f49d3&limit="+t+"&cid="+n+"&crcid="+a+"&sid="+s+"&dif="+i+"&uid="+u+"&id="+m+"&type="+d+"&gt=a",type:"post",data:"",success:function(e){console.log(e),alert("hit")},error:function(e){}})};t.a={setData:function(e,t,n){l.push({index:c,problem:e,attemptedAnswer:t,corectAnswer:n,timeTaken:null})},setDataTime:function(e){l[c].timeTaken=e,u(),c+=1},sendData:u,limit:s,dif:i}},,,,,,,,,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _sessionData__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(11),PRIMES_NUMBERS=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97],getRandomSymbol=function(){var e=["+","-","/","*","+"],t=e.length-1;return e[Math.round(Math.random()*(+t-0)+0)]},evaluate=function(e,t){return function(){return getRandomNumber(5)}},getRandomNumber=function(e){var t,n=1;return null==_sessionData__WEBPACK_IMPORTED_MODULE_0__.a.dif||"b"==_sessionData__WEBPACK_IMPORTED_MODULE_0__.a.dif?(e=5,n=1,t=(Math.random()*(e-n)+1).toFixed()):"i"==_sessionData__WEBPACK_IMPORTED_MODULE_0__.a.dif?(e=20,n=10,t=(Math.random()*(e-n)+n).toFixed()):"m"==_sessionData__WEBPACK_IMPORTED_MODULE_0__.a.dif&&(e=30,n=15,t=(Math.random()*(e-n)+n).toFixed()),t},generateProblem=function(e){var t=getRandomNumber(),n=t,a=getRandomSymbol(),r=evaluate(a,t)()||0;return{problem:n+=" ".concat(a," ").concat(r),firstNumber:t,secondNumber:r,symbol:a}},generateAdditionProblem=function(e){var t=getRandomNumber(),n=getRandomNumber(),a=t;return{problem:a+=" ".concat("+"," ").concat(n),firstNumber:t,secondNumber:n,symbol:"+"}},generateSubtractionProblem=function(e){var t=getRandomNumber();console.log(t),0==t&&(t=1);var n=getRandomNumber();if(console.log(n),0==n&&(n=1),t<n){var a=t;t=n,n=a}var r=t;return{problem:r+=" ".concat("-"," ").concat(n),firstNumber:t,secondNumber:n,symbol:"-"}},compare=function(e,t){return solve(e)===Number(t)},getRandomInt=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},solve=function solve(expression){var result=eval(expression);return result.toString().includes(".")?Number(result.toFixed(2)):result};__webpack_exports__.a={generateProblem:generateProblem,compare:compare,solve:solve,generateAdditionProblem:generateAdditionProblem,generateSubtractionProblem:generateSubtractionProblem,getRandomInt:getRandomInt}},,,,,,function(e,t,n){e.exports=n.p+"static/media/paperBag.18c8ae84.png"},function(e,t,n){e.exports=n.p+"static/media/grapes.e036ffe4.png"},,,,function(e,t,n){e.exports=n.p+"static/media/_1.40d8e09c.mp3"},function(e,t,n){e.exports=n.p+"static/media/_2.65a6b97d.mp3"},function(e,t,n){e.exports=n.p+"static/media/_3.6bd41911.mp3"},function(e,t,n){e.exports=n.p+"static/media/_4.ae5c58d7.mp3"},function(e,t,n){e.exports=n.p+"static/media/_5.fa32eb88.mp3"},function(e,t,n){e.exports=n.p+"static/media/_6.639f363f.mp3"},function(e,t,n){e.exports=n.p+"static/media/_7.7fc04555.mp3"},function(e,t,n){e.exports=n.p+"static/media/_8.9c9b9bcb.mp3"},function(e,t,n){e.exports=n.p+"static/media/_9.fc30493c.mp3"},function(e,t,n){e.exports=n.p+"static/media/_10.594c0b0e.mp3"},function(e,t,n){e.exports=n.p+"static/media/removeItem.91412d06.mp3"},,,function(e,t,n){e.exports=n.p+"static/media/background.f5f25869.gif"},function(e,t,n){e.exports=n.p+"static/media/background2.b512cd28.gif"},function(e,t,n){e.exports=n(97)},,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(31),s=n.n(o),i=n(22),c=n(15),l=n(32),u={points:0,lifes:10,seconds:300,level:1,isFinished:!1,isStarted:!1},m=Object(c.c)(Object(c.a)(l.a))(c.d)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"GAIN_POINTS":var n=e.points+t.payload;return Object.assign({},e,{points:n});case"SET_TIME":return Object.assign({},e,{seconds:t.payload});case"CORRECT_ANSWER":var a={points:e.points+t.payload.points,level:e.level+t.payload.level};return Object.assign({},e,a);case"REMOVE_LIVE":var r=e.lifes-t.payload.lives;return Object.assign({},e,{level:e.level-t.payload.level,lifes:r});case"FINISH_GAME":return Object.assign({},e,{isFinished:t.payload});case"RESTART_GAME":return Object.assign({},e,{points:0,lifes:10,seconds:300,level:1,isFinished:!1});case"START_GAME":return Object.assign({},e,{isStarted:!0});case"EARN_LIFE":return Object.assign({},e,{lifes:e.lifes+1});case"REBOOT_GAME":return Object.assign({},e,{points:0,lifes:10,seconds:300,level:1,isFinished:!1,isStarted:!1});default:return e}}),d=(n(61),n(3)),p=n(4),f=n(5),b=n(2),h=n(6),g=function(e){return function(t){t(e?{type:"FINISH_GAME",payload:!0}:{type:"RESTART_GAME",payload:!0})}};var v=function(e){var t=e.children,n=e.isClicked;return r.a.createElement("button",{className:"App-link",onClick:n},t)},E={set:function(e,t){localStorage.setItem(e,t)},get:function(e){return localStorage.getItem(e)}},y={set:function(e,t){sessionStorage.setItem(e,t)},get:function(e){return sessionStorage.getItem(e)}},w=n(19),_=n.n(w),O=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={player:"player"},n.setNameOfPlayer=function(e){n.setState({player:e.target.value})},n.clicked=function(){y.set("onlinePlayer",n.state.player),n.props.startPressed()},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"App-brandname"},r.a.createElement("i",{className:"fas fa-graduation-cap"}),r.a.createElement("br",null),r.a.createElement(_.a,{text:["Today we will be solving some fun Math Problems!!!"],cursorRenderer:function(e){return r.a.createElement("h1",null,e)},speed:70,eraseSpeed:70,eraseDelay:200,displayTextRenderer:function(e,t){return r.a.createElement("h3",null,e.split("").map(function(e,t){var n="".concat(t);return r.a.createElement("span",{key:n,style:t%2===0?{color:"magenta"}:{}},e)}))}})),r.a.createElement("p",null,"Press to start the game"),r.a.createElement(v,{isClicked:this.clicked},"Start"))}}]),t}(r.a.Component),A=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={msg:3},n.handleCount=function(e){return 1===e.msg?{msg:"GO"}:"GO"===e.msg?{msg:void 0}:{msg:e.msg-1}},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.intervalRef=setInterval(function(){return e.setState(e.handleCount)},1e3)}},{key:"shouldComponentUpdate",value:function(e,t){return void 0!==t.msg||(clearInterval(this.intervalRef),this.props.isComplete(),!1)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalRef)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"GET READY..."),r.a.createElement("h1",null,this.state.msg))}}]),t}(r.a.Component),S={yellow:"#d8b600",lightBlue:"#61dafb",darkGray:"#999ea7",midGray:"#424855",lightGray:"#f5f5f5",darkBg:"#282c34",red:"#ff6572",green:"#31cd61"};function k(e){var t=e.text,n=e.type;return r.a.createElement("span",null,t&&"success"===n&&r.a.createElement("h4",{style:{color:S.green}},t),t&&"success"!==n&&r.a.createElement("h4",{style:{color:S.midGray}},"Answer: ",r.a.createElement("span",{style:{color:S.lightGray}},t)))}var R=function(e){var t=e.type,n=e.text,a="success"===t?{class:"correct-answer",el:r.a.createElement("i",{className:"fas fa-check"})}:{class:"wrong-answer",el:r.a.createElement("i",{className:"fas fa-times-circle"})};return r.a.createElement("section",null,r.a.createElement("div",{className:"answer  ".concat(a.class)},r.a.createElement("h2",null," ",a.el," ")),r.a.createElement(k,{type:t,text:n}))},N=n(27),P=n(33),j=n.n(P),M=n(34),x=n.n(M),C=(n(88),n(89),n(11)),T=n(35),I=n(13),D=n(23),G=n(37),B=n.n(G),W=(n(94),n(38)),L=n.n(W),U=n(39),F=n.n(U),K=n(40),H=n.n(K),V=n(41),J=n.n(V),Y=n(42),q=n.n(Y),z=n(43),Z=n.n(z),X=n(44),$=n.n(X),Q=n(45),ee=n.n(Q),te=n(46),ne=n.n(te),ae=n(47),re=n.n(ae),oe=n(48),se=n.n(oe),ie=n(49),ce=function(e){var t=e.image,n=e.handleClick,a=B()(t.src),o=Object(I.a)(a,1)[0];return r.a.createElement(D.a,{image:o,x:t.x,y:t.y,width:100,height:90,offsetX:o?50:0,offsetY:o?45:0,onClick:n})},le=function(e){var t,n=r.a.useRef(),a=r.a.useRef(),o=r.a.useState([]),s=Object(I.a)(o,2),i=s[0],c=s[1],l=Object(ie.a)(se.a),u=Object(I.a)(l,1)[0],m=r.a.useState(!1),d=Object(I.a)(m,2),p=d[0],f=d[1],b=r.a.useState([new Audio(L.a),new Audio(F.a),new Audio(H.a),new Audio(J.a),new Audio(q.a),new Audio(Z.a),new Audio($.a),new Audio(ee.a),new Audio(ne.a),new Audio(re.a)]),h=Object(I.a)(b,1)[0],g=function(e){f(e)};return t=p?"animate__animated animate__heartBeat":"",r.a.createElement("div",{className:"noselect parentDiv"},r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("img",{alt:"lion",src:e.img,draggable:e.count<10?"true":"false",onDragStart:function(e){n.current=e.target.src},className:"noselect draggableImage "+t,onMouseEnter:function(){g(!0)},onMouseLeave:function(){g(!1)}})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{onDrop:function(t){var r;t.preventDefault(),a.current.setPointersPositions(t),c(i.concat([Object(T.a)({},a.current.getPointerPosition(),{src:n.current})])),e.incCount(1),r=e.count,console.log("i am at "+r),r<h.length&&h[r].play()},onDragOver:function(e){return e.preventDefault()},className:"dropBox"},r.a.createElement(D.c,{width:300,height:200,ref:a},r.a.createElement(D.b,null,i.map(function(t){return r.a.createElement(ce,{image:t,handleClick:function(){c(i.filter(function(e){return e!==t})),u(),e.decCount(1)}})})))))},ue=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o))))._isMounted=!1,n.state={problem:"",wordProblem:"",firstNumber:0,secondNumber:0,symbol:"",answer:0,modal:"",modalShowing:!1,streaks:0,problemTemplates:[],randomImage:""},n.earnLife=function(){n.props.onEarnLife(),n.showModal("success","STREAK!! You won a life \u2665"),n.setState({streaks:0})},n.correctAnswer=function(){n.state.streaks>2?n.earnLife():n.showModal("success"),n._isMounted&&n.props.onCorretAnswer(),n.setState(function(e){return{streaks:e.streaks+1}}),n.nextProblem()},n.wrongAnswer=function(){n._isMounted&&n.props.onWrongAnswer(),n.setState({streaks:0}),n.showModal("error",N.a.solve(n.state.problem).toString()),n.nextProblem()},n.nextProblem=function(){setTimeout(function(){n.getProblem(),n._isMounted&&n.setState({modalShowing:!1,answer:0}),n.props.lifes>0&&n.answerInput&&n.answerInput.focus()},2500)},n.evaluateProblem=function(){var e=N.a.solve(n.state.problem),t=n.state.answer;return C.a.setData(n.state.problem,t,e),N.a.compare(n.state.problem,n.state.answer)?n.correctAnswer():n.wrongAnswer()},n.keyingUp=function(e){"Enter"===e.key&&n.evaluateProblem();var t=e.target.value;n.setState({answer:Number(t.match(/((-?)\d+)/g))})},n.showModal=function(e,t){n.setState({modal:r.a.createElement(R,{type:e,text:t}),modalShowing:!0})},n.getProblem=function(){var e=N.a.generateAdditionProblem(n.props.points);n._isMounted&&n.setState({problem:e.problem,firstNumber:e.firstNumber,secondNumber:e.secondNumber,symbol:e.symbol,problemTemplates:[{pt:"Ali went to the shopping mart. He bought  "+e.firstNumber+" bananas and "+e.secondNumber+" mangoes. How many items did he buy altogether?",ptImage:j.a},{pt:"Anya eats "+e.firstNumber+" grapes while Zamia Eats  "+e.secondNumber+" grapes. How many grapes did Zamia and Anya eat altogether?",ptImage:x.a}]},function(){var e=n.getRandomProblemTemplate();n.setState({wordProblem:e.pt,randomImage:e.ptImage})})},n.getRandomProblemTemplate=function(){return n.state.problemTemplates[N.a.getRandomInt(0,n.state.problemTemplates.length-1)]},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.getProblem()}},{key:"shouldComponentUpdate",value:function(e){return this.props.lifes<1?(this.props.onEndGame(this.state.points),!1):e.lifes>-1}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"show-up"},r.a.createElement("div",null,this.state.modalShowing?this.state.modal:r.a.createElement("div",null,r.a.createElement("div",{class:"thought ",style:{color:"white",margin:"auto",width:"50%"},ref:this.wrapperRef},r.a.createElement(_.a,{text:this.state.wordProblem,speed:70,eraseSpeed:70,eraseDelay:1e7,displayTextRenderer:function(e,t){return r.a.createElement("h3",null,e.split("").map(function(e,t){var n="".concat(t);return r.a.createElement("span",{key:n},e)}))}})),r.a.createElement("div",null,r.a.createElement(le,{incCount:function(){e.setState({answer:e.state.answer+1})},decCount:function(){e.setState({answer:e.state.answer-1})},count:this.state.answer,img:this.state.randomImage,evaluateProblem:this.evaluateProblem})),r.a.createElement("button",{className:"btn fourth answerButton",onClick:this.evaluateProblem}," ",this.state.answer," "))))}}]),t}(r.a.Component),me={fontSize:"1.5em",color:"black",fontFamily:"fantasy",cursor:"pointer"},de={height:0,border:"0.5px solid #61dafb"},pe={color:"black",fontWeight:"bold"},fe=function(e){function t(){return Object(d.a)(this,t),Object(f.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=de,t=me,n=pe;return r.a.createElement("div",null,r.a.createElement("h1",null,"GAME OVER"),r.a.createElement("hr",{style:e}),r.a.createElement("h3",null,"FINAL SCORE ",r.a.createElement("b",{style:n},this.props.points)),r.a.createElement("br",null),r.a.createElement("h3",{style:t,onClick:this.props.retryGame},"RETRY"),this.children)}}]),t}(r.a.Component),be=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(f.a)(this,Object(b.a)(t).call(this,e))).state={seconds:n.props.seconds,level:n.props.level,limit:0,totalProblems:1},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({seconds:this.props.seconds,limit:C.a.limit}),this._secondsIntervalRef=setInterval(function(){return e.setState(function(e){return{seconds:--e.seconds}})},1e3)}},{key:"componentDidUpdate",value:function(){var e=this;this.props.level!==this.state.level&&(C.a.setDataTime(300-this.state.seconds),this.setState(function(t){return{level:e.props.level,totalProblems:e.state.totalProblems+1,seconds:300}}),this.props.setTimeChanged(this.state.seconds)),(this.state.seconds<0||this.state.totalProblems>this.state.limit)&&this.props.onEndGame(this.props.points)}},{key:"componentWillUnmount",value:function(){clearInterval(this._secondsIntervalRef)}},{key:"render",value:function(){return r.a.createElement("span",null,r.a.createElement("b",null," ",this.state.totalProblems,"/",this.state.limit," "))}},{key:"timeTaken",value:function(){return 20-this.state.seconds}}]),t}(r.a.Component);be.defaultProps={level:0};var he=be;var ge=function(e){var t=e.lifes,n=[];if(t<5)for(var a=0;a<t;a++)n.push(r.a.createElement("i",{key:a,style:{marginLeft:"0.1em"},className:"fas fa-heart"}));else n.push(r.a.createElement("i",{key:t,style:{marginLeft:"0.1em"},className:"fas fa-heart"}));return r.a.createElement("span",{style:{color:S.red}},t>4&&r.a.createElement("b",null,"".concat(t,"x")),n)};function ve(e){var t=e.points;return r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-star",style:{color:S.yellow}})," ",t)}n(95);var Ee=n(50),ye={container:{display:"flex",justifyContent:"space-around"},el:{flex:1},title:{margin:"0.6em auto"},divider:{border:"0.5px solid ".concat(S.midGray)},timeCol:{flex:1,padding:"0.3em 0em",fontSize:"0.6em",color:S.darkGray},sectionContainer:{textAlign:"left",padding:"0.15em 0em"}};function we(e){var t=e.player;return r.a.createElement("div",{style:ye.sectionContainer},r.a.createElement("h5",{style:ye.title},t.name),r.a.createElement("div",{style:ye.container},r.a.createElement("small",{style:ye.timeCol},r.a.createElement("i",{className:"fas fa-clock"})," "+Ee(new Date(t.time)).fromNow()),r.a.createElement("small",{style:ye.el},r.a.createElement("i",{className:"fas fa-star",style:{color:S.yellow}})," ",t.points)),r.a.createElement("hr",{style:ye.divider}))}function _e(e){var t=e.points,n=y.get("onlinePlayer"),a=JSON.parse(E.get("scoreTable"))||[];return a.push({name:n,points:t,time:Date.now()}),a=a.sort(function(e,t){return t.points-e.points}).slice(0,4),E.set("scoreTable",JSON.stringify(a)),r.a.createElement("div",null,a.map(function(e,t){return r.a.createElement(we,{player:e,key:t})}))}var Oe=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={isBeginningDone:!1,lastPoints:0},n.retryGame=function(){n.setState({isBeginningDone:!1}),n.props.onRetryGame()},n.completeBeginning=function(){n.setState({isBeginningDone:!0})},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return this.props.isFinished?r.a.createElement(fe,Object.assign({},this.props,{retryGame:this.retryGame}),r.a.createElement(_e,this.props)):r.a.createElement("div",null,this.state.isBeginningDone?r.a.createElement("div",{className:"noselect "},r.a.createElement("div",{className:"App-header-bar"},r.a.createElement(he,this.props),r.a.createElement(ge,this.props),r.a.createElement(ve,this.props)),r.a.createElement("div",null,r.a.createElement(ue,this.props))):r.a.createElement(A,{isComplete:this.completeBeginning}))}}]),t}(r.a.Component),Ae=(n(96),n(51)),Se=n.n(Ae),ke=n(52),Re=n.n(ke);var Ne=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).gameStart=function(){n.props.onStartGame()},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"handleURL",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},"b"==C.a.dif?r.a.createElement("img",{src:Se.a,id:"bg",alt:""}):r.a.createElement("img",{src:Re.a,id:"bg",alt:""}),this.props.isStarted?r.a.createElement(Oe,Object.assign({},this.props,{gameStart:this.gameStart})):r.a.createElement(O,{startPressed:this.gameStart})))}}]),t}(a.Component),Pe=Object(i.b)(function(e){return{points:e.points,lifes:e.lifes,seconds:e.seconds,level:e.level,isFinished:e.isFinished,isStarted:e.isStarted}},function(e){return{onCorretAnswer:function(t){return e(function(e){e({type:"CORRECT_ANSWER",payload:{points:100,level:1}})})},onWrongAnswer:function(){return e(function(e){e({type:"REMOVE_LIVE",payload:{level:1,lives:1}})})},setTimeChanged:function(t){return e((n=t,function(e){e({type:"SET_TIME",payload:n})}));var n},onEndGame:function(){return e(g(!0))},onRetryGame:function(){return e(g(!1))},onReStartGame:function(){return e(function(e){e({type:"REBOOT_GAME"})})},onStartGame:function(){return e(function(e){e({type:"START_GAME"})})},onEarnLife:function(){return e(function(e){e({type:"EARN_LIFE"})})}}})(Ne),je=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Me(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(r.a.createElement(i.a,{store:m},r.a.createElement(Pe,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Addition_WordProblems",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/Addition_WordProblems","/service-worker.js");je?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Me(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):Me(t,e)})}}()}],[[53,1,2]]]);
//# sourceMappingURL=main.ca820ce6.chunk.js.map