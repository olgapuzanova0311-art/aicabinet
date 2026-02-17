{\rtf1\ansi\ansicpg1251\cocoartf2868
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Basic state\
const STORAGE_KEYS = \{\
  onboarding: 'ai_cabinet_onboarding_v1',\
  stats: 'ai_cabinet_stats_v1',\
\};\
\
const DAILY_FREE_LIMIT = 5;\
\
let userProfile = null;\
let stats = \{\
  dailyGenerations: 0,\
  totalGenerations: 0,\
  aiIndex: 12,\
  actionsCount: 0,\
  level: 1,\
\};\
\
// ... \uc0\u1076 \u1072 \u1083 \u1077 \u1077  \u1074 \u1077 \u1089 \u1100  JS: \u1085 \u1072 \u1074 \u1080 \u1075 \u1072 \u1094 \u1080 \u1103 , \u1086 \u1085 \u1073 \u1086 \u1088 \u1076 \u1080 \u1085 \u1075 , \u1075 \u1077 \u1085 \u1077 \u1088 \u1072 \u1094 \u1080 \u1080 , PRO, WebApp API ...}