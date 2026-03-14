import { Component, HostListener, OnInit } from '@angular/core';

@Component({
selector: 'app-root',
templateUrl: './app.html',
styleUrls: ['./app.css']
})
export class App implements OnInit {

particles:any[]=[]
mouse={x:0,y:0}

ngOnInit(){

window.addEventListener("load",()=>{

const loader=document.getElementById("loader")

if(loader){
loader.style.opacity="0"
setTimeout(()=>loader.remove(),500)
}

})

this.initParticles()
this.animateParticles()

this.initTiltCards()
this.initProjectGlow()
this.initProjectGridMotion()

}

initTiltCards(){

const cards=document.querySelectorAll('.tilt-card')

cards.forEach(card=>{

card.addEventListener('mousemove',(e:any)=>{

const rect=(card as HTMLElement).getBoundingClientRect()

const x=e.clientX-rect.left
const y=e.clientY-rect.top

const centerX=rect.width/2
const centerY=rect.height/2

const rotateX=(y-centerY)/16
const rotateY=(centerX-x)/16

;(card as HTMLElement).style.transform=
`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`

;(card as HTMLElement).style.setProperty("--x",x+"px")
;(card as HTMLElement).style.setProperty("--y",y+"px")

})

card.addEventListener('mouseleave',()=>{

;(card as HTMLElement).style.transform=
`rotateX(0deg) rotateY(0deg) scale(1)`

})

})

}

initProjectGlow(){

const cards=document.querySelectorAll(".project-card")

cards.forEach(card=>{

card.addEventListener("mousemove",(e:any)=>{

const rect=(card as HTMLElement).getBoundingClientRect()

const x=e.clientX-rect.left
const y=e.clientY-rect.top

;(card as HTMLElement).style.setProperty("--x",x+"px")
;(card as HTMLElement).style.setProperty("--y",y+"px")

})

})

}

initProjectGridMotion(){

const grids=document.querySelectorAll('.projects-grid')

grids.forEach(grid=>{

grid.addEventListener('mousemove',(e:any)=>{

const rect=(grid as HTMLElement).getBoundingClientRect()

const x=e.clientX-rect.left
const center=rect.width/2

const move=(x-center)/18

;(grid as HTMLElement).style.transform=`translateX(${move}px)`

})

grid.addEventListener('mouseleave',()=>{

;(grid as HTMLElement).style.transform=`translateX(0)`

})

})

}

@HostListener('window:scroll')
onScroll(){

this.revealElements()
this.updateNavbar()
this.detectSection()

}

revealElements(){

const elements=document.querySelectorAll('.reveal')

elements.forEach(el=>{

const rect=el.getBoundingClientRect()

if(rect.top<window.innerHeight-100){
el.classList.add('active')
}

})

}

updateNavbar(){

const nav=document.getElementById('navbar')

if(window.scrollY>50){
nav?.classList.add('shadow-lg','bg-[#0B0F19]/90')
}else{
nav?.classList.remove('shadow-lg','bg-[#0B0F19]/90')
}

}

detectSection(){

const sections=document.querySelectorAll("section")
const navLinks=document.querySelectorAll("#navbar a")

let current=""

sections.forEach(section=>{

const sectionTop=(section as HTMLElement).offsetTop-200

if(window.scrollY>=sectionTop){
current=section.getAttribute("id")||""
}

})

navLinks.forEach(link=>{

link.classList.remove("text-violet-400")

if(link.getAttribute("href")==="#"+current){
link.classList.add("text-violet-400")
}

})

}

@HostListener('document:mousemove',['$event'])
onMouseMove(e:MouseEvent){

this.mouse.x=e.clientX
this.mouse.y=e.clientY

const glow=document.querySelector('.cursor-glow') as HTMLElement
if(glow){
glow.style.left=e.clientX+"px"
glow.style.top=e.clientY+"px"
}

const dot=document.querySelector('.cursor-dot') as HTMLElement
if(dot){
dot.style.left=e.clientX+"px"
dot.style.top=e.clientY+"px"
}

const hero=document.querySelector('#home') as HTMLElement

if(hero){

const x=(window.innerWidth/2-e.clientX)/40
const y=(window.innerHeight/2-e.clientY)/40

hero.style.transform=`rotateY(${x}deg) rotateX(${y}deg)`

}

}

initParticles(){

const canvas=document.getElementById("particles") as HTMLCanvasElement
if(!canvas)return

const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

this.particles=[]

for(let i=0;i<80;i++){

this.particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
vx:(Math.random()-0.5)*0.6,
vy:(Math.random()-0.5)*0.6,
size:Math.random()*2+1
})

}

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth
canvas.height=window.innerHeight

})

}

animateParticles(){

const canvas=document.getElementById("particles") as HTMLCanvasElement
if(!canvas)return

const ctx=canvas.getContext("2d")

const loop=()=>{

ctx?.clearRect(0,0,canvas.width,canvas.height)

this.particles.forEach(p=>{

p.x+=p.vx
p.y+=p.vy

if(p.x<0||p.x>canvas.width)p.vx*=-1
if(p.y<0||p.y>canvas.height)p.vy*=-1

const dx=p.x-this.mouse.x
const dy=p.y-this.mouse.y
const dist=Math.sqrt(dx*dx+dy*dy)

if(dist<120){

p.x+=dx*0.02
p.y+=dy*0.02

}

ctx?.beginPath()
ctx?.arc(p.x,p.y,p.size,0,Math.PI*2)
ctx!.fillStyle="#7C3AED"
ctx?.fill()

})

requestAnimationFrame(loop)

}

loop()

}

}