(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"animated_illustration_atlas_1", frames: [[0,0,1246,1124]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_1 = function() {
	this.initialize(ss["animated_illustration_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Painters = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-311.55,-281.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Painters, new cjs.Rectangle(-311.5,-281.1,623,562), null);


// stage content:
(lib.animated_illustration = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Painters
	this.instance = new lib.Painters();
	this.instance.setTransform(311.55,281.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(75));

	// Backgrounds
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape.setTransform(335.575,281.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCFFFC").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_1.setTransform(335.575,281.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FAFFFA").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_2.setTransform(335.575,281.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7FFF7").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_3.setTransform(335.575,281.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F4FFF4").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_4.setTransform(335.575,281.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2FFF2").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_5.setTransform(335.575,281.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EFFFEF").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_6.setTransform(335.575,281.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ECFFEC").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_7.setTransform(335.575,281.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EAFFEA").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_8.setTransform(335.575,281.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E7FFE7").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_9.setTransform(335.575,281.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E4FFE4").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_10.setTransform(335.575,281.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E1FFE1").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_11.setTransform(335.575,281.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DFFFDF").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_12.setTransform(335.575,281.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DCFFDC").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_13.setTransform(335.575,281.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D9FFD9").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_14.setTransform(335.575,281.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D7FFD7").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_15.setTransform(335.575,281.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D4FFD4").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_16.setTransform(335.575,281.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D1FFD1").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_17.setTransform(335.575,281.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CFFFCF").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_18.setTransform(335.575,281.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CCFFCC").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_19.setTransform(335.575,281.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CFFCC7").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_20.setTransform(335.575,281.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D1FAC2").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_21.setTransform(335.575,281.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D4F7BD").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_22.setTransform(335.575,281.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D6F5B8").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_23.setTransform(335.575,281.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D9F2B3").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_24.setTransform(335.575,281.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#DBF0AD").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_25.setTransform(335.575,281.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DEEDA8").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_26.setTransform(335.575,281.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E0EBA3").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_27.setTransform(335.575,281.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E3E89E").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_28.setTransform(335.575,281.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E6E699").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_29.setTransform(335.575,281.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E8E394").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_30.setTransform(335.575,281.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EBE08F").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_31.setTransform(335.575,281.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EDDE8A").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_32.setTransform(335.575,281.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F0DB85").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_33.setTransform(335.575,281.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F2D980").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_34.setTransform(335.575,281.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F5D67A").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_35.setTransform(335.575,281.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F7D475").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_36.setTransform(335.575,281.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FAD170").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_37.setTransform(335.575,281.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FCCF6B").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_38.setTransform(335.575,281.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFCC66").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_39.setTransform(335.575,281.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFCE6C").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_40.setTransform(335.575,281.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFD072").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_41.setTransform(335.575,281.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFD278").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_42.setTransform(335.575,281.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFD47E").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_43.setTransform(335.575,281.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFD685").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_44.setTransform(335.575,281.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFD88B").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_45.setTransform(335.575,281.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFDA91").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_46.setTransform(335.575,281.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFDC97").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_47.setTransform(335.575,281.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFDE9D").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_48.setTransform(335.575,281.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFE0A3").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_49.setTransform(335.575,281.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFE2A9").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_50.setTransform(335.575,281.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFE4AF").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_51.setTransform(335.575,281.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFE7B6").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_52.setTransform(335.575,281.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFE9BC").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_53.setTransform(335.575,281.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFEBC2").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_54.setTransform(335.575,281.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFEDC8").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_55.setTransform(335.575,281.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFEFCE").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_56.setTransform(335.575,281.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFF1D4").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_57.setTransform(335.575,281.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFF3DA").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_58.setTransform(335.575,281.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFF5E0").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_59.setTransform(335.575,281.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFF7E7").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_60.setTransform(335.575,281.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFF9ED").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_61.setTransform(335.575,281.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFBF3").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_62.setTransform(335.575,281.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFDF9").s().p("Ege/Ar7MAAAhX1MA9/AAAMAAABX1g");
	this.shape_63.setTransform(335.575,281.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape}]},1).wait(11));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(311.5,281,311.5,281.20000000000005);
// library properties:
lib.properties = {
	id: '23E414ED01058E4290819AB4FD7B94D1',
	width: 623,
	height: 562,
	fps: 8,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/animated_illustration_atlas_1.png", id:"animated_illustration_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['23E414ED01058E4290819AB4FD7B94D1'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;