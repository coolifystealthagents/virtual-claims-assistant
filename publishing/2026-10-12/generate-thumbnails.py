#!/usr/bin/env python3
import json,hashlib
from pathlib import Path
from PIL import Image,ImageDraw,ImageFont
ROOT=Path(__file__).resolve().parents[2];DATA=json.loads((ROOT/'publishing/2026-10-12/release-data.json').read_text());OUT=ROOT/'public/thumbnails/october-12';OUT.mkdir(parents=True,exist_ok=True)
bold='/System/Library/Fonts/Supplemental/Arial Bold.ttf';regular='/System/Library/Fonts/Supplemental/Arial.ttf'
def font(p,s):
 try:return ImageFont.truetype(p,s)
 except:return ImageFont.load_default()
def wrap(d,text,f,w):
 lines=[];line=''
 for word in text.split():
  test=(line+' '+word).strip()
  if d.textbbox((0,0),test,font=f)[2]<=w:line=test
  else:lines.append(line);line=word
 if line:lines.append(line)
 return lines
def make(item,i,kind):
 palettes=[((243,247,255),(23,75,216),(132,239,208)),((246,249,255),(31,65,153),(159,200,255)),((241,247,253),(12,83,146),(118,224,201)),((246,248,255),(54,72,166),(151,192,246))]
 bg,primary,accent=palettes[i%4];im=Image.new('RGB',(1200,630),bg);d=ImageDraw.Draw(im);seed=int(hashlib.sha256(item['slug'].encode()).hexdigest()[:8],16)
 d.rectangle((0,0,18,630),fill=accent);d.rounded_rectangle((710,72,1125,554),34,fill=(255,255,255),outline=primary,width=5);d.polygon([(918,120),(1060,172),(1034,390),(918,495),(802,390),(776,172)],fill=(230,240,255),outline=primary)
 for n in range(4):
  y=210+n*55;w=150+((seed>>(n*4))&90);d.rounded_rectangle((835,y,835+w,y+20),7,fill=primary if n%2==0 else accent)
 d.text((70,70),'RESEARCH BRIEF' if kind=='research' else 'CLAIMS OPERATIONS GUIDE',font=font(bold,22),fill=primary)
 size=48
 while size>31:
  f=font(bold,size);lines=wrap(d,item['title'],f,560)
  if len(lines)<=4:break
  size-=2
 y=140
 for line in lines:d.text((70,y),line,font=f,fill=(11,28,62));y+=size+11
 d.text((70,520),'VIRTUAL CLAIMS ASSISTANT',font=font(bold,21),fill=primary);d.text((70,560),'2026-10-12',font=font(regular,18),fill=(76,91,124))
 return im
for i,item in enumerate(DATA['blogs']):make(item,i,'blog').save(OUT/f"{item['slug']}.webp",'WEBP',quality=88,method=6)
for i,item in enumerate(DATA['research']):make(item,i+12,'research').save(OUT/f"{item['slug']}.webp",'WEBP',quality=88,method=6)
