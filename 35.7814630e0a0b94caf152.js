"use strict";(self.webpackChunkjfc=self.webpackChunkjfc||[]).push([[35],{6035:(f,r,t)=>{t.r(r),t.d(r,{TokenExchangeModule:()=>d});var u=t(2753),c=t(6283),i=t(4762),h=t(5372),o=t(4788);const g=[{path:"",component:(()=>{class e{constructor(n,s,v){this._route=n,this._router=s,this._stravaService=v}ngOnInit(){return(0,i.mG)(this,void 0,void 0,function*(){const n=this._route.snapshot.queryParamMap.get("code");n?(yield this._stravaService.authenticate(n),this._router.navigate(["/dashboard"])):console.error("No code in query params")})}}return e.\u0275fac=function(n){return new(n||e)(o.Y36(c.gz),o.Y36(c.F0),o.Y36(h.R))},e.\u0275cmp=o.Xpm({type:e,selectors:[["strava-token-exchange-page"]],decls:1,vars:0,template:function(n,s){1&n&&o._uU(0,"loading...\n")},encapsulation:2}),e})()}];let l=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[c.Bz.forChild(g)],c.Bz]}),e})(),d=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[l,u.xu]]}),e})()}}]);