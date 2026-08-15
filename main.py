import os
import re
import json
import time
import requests
from typing import List, Dict, Optional
from fastapi import FastAPI, HTTPException, Request, Query, Header
from fastapi.responses import RedirectResponse, JSONResponse, StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(
    title="Alcsta Neo Backend Engine",
    description="Full Dual IDN Live & Showroom Stream Engine with Streaming Video Proxy",
    version="7.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

TEMP_CHAT_DB: Dict[str, List[Dict]] = {}
IDN_CACHE = {"last_checked": 0, "active_lives": {}}
MAPPED_REPLAYS_CACHE: List[Dict] = []

# COMPLETE 62 JKT48 MEMBERS DATASET
MEMBER_ROOMS = [
    {
        "name":  "Abigail Rachel (Aralie)",
        "roomId":  "0",
        "avatar":  "../skin/ABIGAIL_RACHEL_MYTH.jpg",
        "idnSlug":  "jkt48_abigail",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_AbigailRachel",
        "isLive":  False
    },
    {
        "name":  "Adeline Wijaya (Delynn)",
        "roomId":  "0",
        "avatar":  "../skin/ADELINE_WIJAYA_MYTH.jpg",
        "idnSlug":  "jkt48_adeline",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_AdelineWijaya",
        "isLive":  False
    },
    {
        "name":  "Adhisty Zara",
        "roomId":  "0",
        "avatar":  "../skin/ADHISTY_ZARA_MYTH.jpg",
        "idnSlug":  "jkt48_adhisty",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_AdhistyZara",
        "isLive":  False
    },
    {
        "name":  "Adzana Ashel",
        "roomId":  "0",
        "avatar":  "../skin/ADZANA_ASHEL_MYTH.jpg",
        "idnSlug":  "jkt48_adzana",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_AdzanaAshel",
        "isLive":  False
    },
    {
        "name":  "Afera Thalia (Gen 13)",
        "roomId":  "0",
        "avatar":  "../skin/AFERA_THALIA_UNCOMMON.jpg",
        "idnSlug":  "jkt48_afera",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_AferaThalia",
        "isLive":  False
    },
    {
        "name":  "Alya Amanda",
        "roomId":  "0",
        "avatar":  "../skin/ALYA_AMANDA_MYTH.jpg",
        "idnSlug":  "jkt48_alya",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_AlyaAmanda",
        "isLive":  False
    },
    {
        "name":  "Amanda Sukma",
        "roomId":  "0",
        "avatar":  "../skin/AMANDA_SUKMA_MYTH.jpg",
        "idnSlug":  "jkt48_amanda",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_AmandaSukma",
        "isLive":  False
    },
    {
        "name":  "Angelina Christy",
        "roomId":  "0",
        "avatar":  "../skin/ANGELINA_CHRISTY_MYTH.jpg",
        "idnSlug":  "jkt48_angelina",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_AngelinaChristy",
        "isLive":  False
    },
    {
        "name":  "Anindya Ramadhani",
        "roomId":  "0",
        "avatar":  "../skin/ANINDYA_RAMADHANI_MYTH.jpg",
        "idnSlug":  "jkt48_anindya",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_AnindyaRamadhani",
        "isLive":  False
    },
    {
        "name":  "Zahra Nur (Ara)",
        "roomId":  "0",
        "avatar":  "../skin/ARA_MYTH.jpg",
        "idnSlug":  "jkt48_ara",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_Ara",
        "isLive":  False
    },
    {
        "name":  "Astrella Virgiananda (Gen 13)",
        "roomId":  "0",
        "avatar":  "../skin/ASTRELLA_VIRGIANANDA_UNCOMMON.jpg",
        "idnSlug":  "jkt48_astrella",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_AstrellaVirgiananda",
        "isLive":  False
    },
    {
        "name":  "Aulia Riza (Gen 13)",
        "roomId":  "0",
        "avatar":  "../skin/AULIA_RIZA_UNCOMMON.jpg",
        "idnSlug":  "jkt48_aulia",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_AuliaRiza",
        "isLive":  False
    },
    {
        "name":  "Aurel Mayori (Yori)",
        "roomId":  "0",
        "avatar":  "../skin/AUREL_MAYORI_MYTH.jpg",
        "idnSlug":  "jkt48_aurel",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_AurelMayori",
        "isLive":  False
    },
    {
        "name":  "Aurellia (Lia)",
        "roomId":  "0",
        "avatar":  "../skin/AURELLIA_LIA_MYTH.jpg",
        "idnSlug":  "jkt48_aurellia",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_AurelliaLia",
        "isLive":  False
    },
    {
        "name":  "Aurhel Alana (Lana)",
        "roomId":  "0",
        "avatar":  "../skin/AURHEL_ALANA_MYTH.jpg",
        "idnSlug":  "jkt48_aurhel",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_AurhelAlana",
        "isLive":  False
    },
    {
        "name":  "Ayana Shahab",
        "roomId":  "0",
        "avatar":  "../skin/AYANA_SHAHAB_MYTH.jpg",
        "idnSlug":  "jkt48_ayana",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_AyanaShahab",
        "isLive":  False
    },
    {
        "name":  "Azizi Asadel (Zee)",
        "roomId":  "0",
        "avatar":  "../skin/AZIZI_ASSADEL_MYTH.jpg",
        "idnSlug":  "jkt48_azizi",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_AziziAssadel",
        "isLive":  False
    },
    {
        "name":  "Bong Aprilli (Gen 13)",
        "roomId":  "0",
        "avatar":  "../skin/BONG_APRILLI_UNCOMMON.jpg",
        "idnSlug":  "jkt48_bong",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_BongAprilli",
        "isLive":  False
    },
    {
        "name":  "Carissa Dini (Gen 13)",
        "roomId":  "0",
        "avatar":  "../skin/CARISSA_DINI_UNCOMMON.jpg",
        "idnSlug":  "jkt48_carissa",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_CarissaDini",
        "isLive":  False
    },
    {
        "name":  "Catherina Vallencia (Erine)",
        "roomId":  "0",
        "avatar":  "../skin/CATHERINA_VALLENCIA_MYTH.jpg",
        "idnSlug":  "jkt48_catherina",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_CatherinaVallencia",
        "isLive":  False
    },
    {
        "name":  "Cathleen Nixie (Cathy)",
        "roomId":  "0",
        "avatar":  "../skin/CATHLEEN_NIXIE_MYTH.jpg",
        "idnSlug":  "jkt48_cathleen",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_CathleenNixie",
        "isLive":  False
    },
    {
        "name":  "Celline Thefani (Elin)",
        "roomId":  "0",
        "avatar":  "../skin/CELLINE_THEFANI_MYTH.jpg",
        "idnSlug":  "jkt48_celline",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_CellineThefani",
        "isLive":  False
    },
    {
        "name":  "Chelsea Devina",
        "roomId":  "0",
        "avatar":  "../skin/CHELSEA_DEVINA_MYTH.jpg",
        "idnSlug":  "jkt48_chelsea",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_ChelseaDevina",
        "isLive":  False
    },
    {
        "name":  "Christabella Bonita (Gen 13)",
        "roomId":  "0",
        "avatar":  "../skin/CHRISTABELLA_BONITA_UNCOMMON.jpg",
        "idnSlug":  "jkt48_christabella",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_ChristabellaBonita",
        "isLive":  False
    },
    {
        "name":  "Cindy Yuvia (Yupi)",
        "roomId":  "0",
        "avatar":  "../skin/CINDY_YUVIA_MYTH.jpg",
        "idnSlug":  "jkt48_cindy",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_CindyYuvia",
        "isLive":  False
    },
    {
        "name":  "Cornelia Vanisa (Oniel)",
        "roomId":  "0",
        "avatar":  "../skin/CORNELIA_VANISA_MYTH.jpg",
        "idnSlug":  "jkt48_cornelia",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_CorneliaVanisa",
        "isLive":  False
    },
    {
        "name":  "Cynthia Yaputera",
        "roomId":  "0",
        "avatar":  "../skin/CYNTHIA_YAPUTERA_MYTH.jpg",
        "idnSlug":  "jkt48_cynthia",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_CynthiaYaputera",
        "isLive":  False
    },
    {
        "name":  "Dena Natalia (Danella)",
        "roomId":  "0",
        "avatar":  "../skin/DENA_NATALIA_MYTH.jpg",
        "idnSlug":  "jkt48_dena",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_DenaNatalia",
        "isLive":  False
    },
    {
        "name":  "Desy Natalia (Daisy)",
        "roomId":  "0",
        "avatar":  "../skin/DESY_NATALIA_MYTH.jpg",
        "idnSlug":  "jkt48_desy",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_DesyNatalia",
        "isLive":  False
    },
    {
        "name":  "Fahira Putri (Gen 13)",
        "roomId":  "0",
        "avatar":  "../skin/FAHIRA_PUTRI_UNCOMMON.jpg",
        "idnSlug":  "jkt48_fahira",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_FahiraPutri",
        "isLive":  False
    },
    {
        "name":  "Fatimah Azzahra (Gen 13)",
        "roomId":  "0",
        "avatar":  "../skin/FATIMAH_AZZAHRA_UNCOMMON.jpg",
        "idnSlug":  "jkt48_fatimah",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_FatimahAzzahra",
        "isLive":  False
    },
    {
        "name":  "Febriola Sinambela (Olla)",
        "roomId":  "0",
        "avatar":  "../skin/FEBRIOLA_SINAMBELLA_MYTH.jpg",
        "idnSlug":  "jkt48_febriola",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_FebriolaSinambella",
        "isLive":  False
    },
    {
        "name":  "Feni Fitriyanti",
        "roomId":  "0",
        "avatar":  "../skin/FENI_FITRIYANTI_MYTH.jpg",
        "idnSlug":  "jkt48_feni",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_FeniFitriyanti",
        "isLive":  False
    },
    {
        "name":  "Fiony Alveria",
        "roomId":  "0",
        "avatar":  "../skin/FIONY_ALVERIA_MYTH.jpg",
        "idnSlug":  "jkt48_fiony",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_FionyAlveria",
        "isLive":  False
    },
    {
        "name":  "Flora Shafiq",
        "roomId":  "0",
        "avatar":  "../skin/FLORA_SHAFIQ_MYTH.jpg",
        "idnSlug":  "jkt48_flora",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_FloraShafiq",
        "isLive":  False
    },
    {
        "name":  "Freya Jayawardana",
        "roomId":  "0",
        "avatar":  "../skin/FREYA_JAYAWARDANA_MYTH.jpg",
        "idnSlug":  "jkt48_freya",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_FreyaJayawardana",
        "isLive":  False
    },
    {
        "name":  "Frieska Anastasia",
        "roomId":  "0",
        "avatar":  "../skin/FRIESKA_MYTH.jpg",
        "idnSlug":  "jkt48_frieska",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_Frieska",
        "isLive":  False
    },
    {
        "name":  "Fritzy Rosmerian",
        "roomId":  "0",
        "avatar":  "../skin/FRITZY_ROSMERIAN_MYTH.jpg",
        "idnSlug":  "jkt48_fritzy",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_FritzyRosmerian",
        "isLive":  False
    },
    {
        "name":  "Gabriela Abigail (Ella)",
        "roomId":  "0",
        "avatar":  "../skin/GABRIELA_ABIGAIL_MYTH.jpg",
        "idnSlug":  "jkt48_gabriela",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_GabrielaAbigail",
        "isLive":  False
    },
    {
        "name":  "Gendis Mayrannisa",
        "roomId":  "0",
        "avatar":  "../skin/GENDIS_MAYRANNISA_MYTH.jpg",
        "idnSlug":  "jkt48_gendis",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_GendisMayrannisa",
        "isLive":  False
    },
    {
        "name":  "Gisele",
        "roomId":  "0",
        "avatar":  "../skin/GISELE_GEN_10_MYTH.jpg",
        "idnSlug":  "jkt48_gisele",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_GiseleGen10",
        "isLive":  False
    },
    {
        "name":  "Gita Sekar Andarini",
        "roomId":  "0",
        "avatar":  "../skin/GITA_SEKAR_MYTH.jpg",
        "idnSlug":  "jkt48_gita",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_GitaSekar",
        "isLive":  False
    },
    {
        "name":  "Grace Octaviani (Gracie)",
        "roomId":  "0",
        "avatar":  "../skin/GRACE_OCTAVIANI_MYTH.jpg",
        "idnSlug":  "jkt48_grace",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_GraceOctaviani",
        "isLive":  False
    },
    {
        "name":  "Greesella Adhalia (Greesel)",
        "roomId":  "0",
        "avatar":  "../skin/GREESELA_ADHALIA_MYTH.jpg",
        "idnSlug":  "jkt48_greesela",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_GreeselaAdhalia",
        "isLive":  False
    },
    {
        "name":  "Hagia Sopia (Gen 13)",
        "roomId":  "0",
        "avatar":  "../skin/HAGIA_SOPIA_UNCOMMON.jpg",
        "idnSlug":  "jkt48_hagia",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_HagiaSopia",
        "isLive":  False
    },
    {
        "name":  "Heida Suyangga (Gen 13)",
        "roomId":  "0",
        "avatar":  "../skin/HEIDA_SUYANGGA_UNCOMMON.jpg",
        "idnSlug":  "jkt48_heida",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_HeidaSuyangga",
        "isLive":  False
    },
    {
        "name":  "Helisma Putri (Eli)",
        "roomId":  "0",
        "avatar":  "../skin/HELISMA_PUTRI_MYTH.jpg",
        "idnSlug":  "jkt48_helisma",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_HelismaPutri",
        "isLive":  False
    },
    {
        "name":  "Hillary Abigail (Lily)",
        "roomId":  "0",
        "avatar":  "../skin/HILLARY_ABIGAIL_MYTH.jpg",
        "idnSlug":  "jkt48_hillary",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_HillaryAbigail",
        "isLive":  False
    },
    {
        "name":  "Humaira Ramadhani (Gen 13)",
        "roomId":  "0",
        "avatar":  "../skin/HUMAIRA_RAMADHANI_UNCOMMON.jpg",
        "idnSlug":  "jkt48_humaira",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_HumairaRamadhani",
        "isLive":  False
    },
    {
        "name":  "Indah Cahya",
        "roomId":  "0",
        "avatar":  "../skin/INDAH_CAHYA_MYTH.jpg",
        "idnSlug":  "jkt48_indah",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_IndahCahya",
        "isLive":  False
    },
    {
        "name":  "Indira Putri (Indira)",
        "roomId":  "0",
        "avatar":  "../skin/INDIRA_PUTRI_MYTH.jpg",
        "idnSlug":  "jkt48_indira",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_IndiraPutri",
        "isLive":  False
    },
    {
        "name":  "Jacqueline Immanuela (Gen 13)",
        "roomId":  "0",
        "avatar":  "../skin/JACQUELINE_IMMANUELA_UNCOMMON.jpg",
        "idnSlug":  "jkt48_jacqueline",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_JacquelineImmanuela",
        "isLive":  False
    },
    {
        "name":  "Jazzlyn Trisha (Trisha)",
        "roomId":  "0",
        "avatar":  "../skin/JAZZLYN_TRISHA_MYTH.jpg",
        "idnSlug":  "jkt48_jazzlyn",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_JazzlynTrisha",
        "isLive":  False
    },
    {
        "name":  "Jemima Evodie (Gen 13)",
        "roomId":  "0",
        "avatar":  "../skin/JEMIMA_EVODIE_UNCOMMON.jpg",
        "idnSlug":  "jkt48_jemima",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_JemimaEvodie",
        "isLive":  False
    },
    {
        "name":  "Jessica Chandra (Jessi)",
        "roomId":  "0",
        "avatar":  "../skin/JESSICA_CHANDRA_MYTH.jpg",
        "idnSlug":  "jkt48_jessica",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_JessicaChandra",
        "isLive":  False
    },
    {
        "name":  "Jesslyn Callista",
        "roomId":  "0",
        "avatar":  "../skin/JESSLYN_CALLISTA_MYTH.jpg",
        "idnSlug":  "jkt48_jesslyn",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_JesslynCallista",
        "isLive":  False
    },
    {
        "name":  "Jesslyn Elly (Lyn)",
        "roomId":  "0",
        "avatar":  "../skin/JESSLYN_ELLY_MYTH.jpg",
        "idnSlug":  "jkt48_jesslyn",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_JesslynElly",
        "isLive":  False
    },
    {
        "name":  "Jinan Safa Safira",
        "roomId":  "0",
        "avatar":  "../skin/JINAN_MYTH.jpg",
        "idnSlug":  "jkt48_jinan",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_Jinan",
        "isLive":  False
    },
    {
        "name":  "Kathrina Irene",
        "roomId":  "0",
        "avatar":  "../skin/KATHRINA_IRENE_MYTH.jpg",
        "idnSlug":  "jkt48_kathrina",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_KathrinaIrene",
        "isLive":  False
    },
    {
        "name":  "Lulu Salsabila",
        "roomId":  "0",
        "avatar":  "../skin/LULU_SALSABILA_MYTH.jpg",
        "idnSlug":  "jkt48_lulu",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_LuluSalsabila",
        "isLive":  False
    },
    {
        "name":  "Maegan Jovanka (Gen 13)",
        "roomId":  "0",
        "avatar":  "../skin/MAEGAN_JOVANKA_UNCOMMON.jpg",
        "idnSlug":  "jkt48_maegan",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_MaeganJovanka",
        "isLive":  False
    },
    {
        "name":  "Marsha Lenathea",
        "roomId":  "0",
        "avatar":  "../skin/MARSHA_LENATHEA_MYTH.jpg",
        "idnSlug":  "jkt48_marsha",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_MarshaLenathea",
        "isLive":  False
    },
    {
        "name":  "Maxine Faye (Gen 13)",
        "roomId":  "0",
        "avatar":  "../skin/MAXINE_FAYE_UNCOMMON.jpg",
        "idnSlug":  "jkt48_maxine",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_MaxineFaye",
        "isLive":  False
    },
    {
        "name":  "Melati Sesilia",
        "roomId":  "0",
        "avatar":  "../skin/MELATI_MYTH.jpg",
        "idnSlug":  "jkt48_melati",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_Melati",
        "isLive":  False
    },
    {
        "name":  "Michelle Alexandra (Michie)",
        "roomId":  "0",
        "avatar":  "../skin/MICHELLE_ALEXANDRA_MYTH.jpg",
        "idnSlug":  "jkt48_michelle",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_MichelleAlexandra",
        "isLive":  False
    },
    {
        "name":  "Michelle Levia (Levi)",
        "roomId":  "0",
        "avatar":  "../skin/MICHELLE_LEVIA_MYTH.jpg",
        "idnSlug":  "jkt48_michelle",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_MichelleLevia",
        "isLive":  False
    },
    {
        "name":  "Mikaela Kusjanto (Gen 13)",
        "roomId":  "0",
        "avatar":  "../skin/MIKAELA_KUSJANTO_UNCOMMON.jpg",
        "idnSlug":  "jkt48_mikaela",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_MikaelaKusjanto",
        "isLive":  False
    },
    {
        "name":  "Mutiara Azzahra (Muthe)",
        "roomId":  "0",
        "avatar":  "../skin/MUTIARA_AZZAHRA_MYTH.jpg",
        "idnSlug":  "jkt48_mutiara",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_MutiaraAzzahra",
        "isLive":  False
    },
    {
        "name":  "Nabila Fitriana (Lala)",
        "roomId":  "0",
        "avatar":  "../skin/NABILA_FITRIANA_MYTH.jpg",
        "idnSlug":  "jkt48_nabila",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_NabilaFitriana",
        "isLive":  False
    },
    {
        "name":  "Nabilah Ratna Ayu",
        "roomId":  "0",
        "avatar":  "../skin/NABILAH_GEN_1_MYTH.jpg",
        "idnSlug":  "jkt48_nabilah",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_NabilahGen1",
        "isLive":  False
    },
    {
        "name":  "Nayla Suji",
        "roomId":  "0",
        "avatar":  "../skin/NAYLA_SUJI_MYTH.jpg",
        "idnSlug":  "jkt48_nayla",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_NaylaSuji",
        "isLive":  False
    },
    {
        "name":  "Nina Tutachia (Nachia)",
        "roomId":  "0",
        "avatar":  "../skin/NINA_TUTACHIA_MYTH.jpg",
        "idnSlug":  "jkt48_nina",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_NinaTutachia",
        "isLive":  False
    },
    {
        "name":  "Nur Intan (Gen 13)",
        "roomId":  "0",
        "avatar":  "../skin/NUR_INTAN_UNCOMMON.jpg",
        "idnSlug":  "jkt48_nur",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_NurIntan",
        "isLive":  False
    },
    {
        "name":  "Oline Manuel",
        "roomId":  "0",
        "avatar":  "../skin/OLINE_MANUEL_MYTH.jpg",
        "idnSlug":  "jkt48_oline",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_OlineManuel",
        "isLive":  False
    },
    {
        "name":  "Putri Jazyta (Gen 13)",
        "roomId":  "0",
        "avatar":  "../skin/PUTRI_JAZYTA_UNCOMMON.jpg",
        "idnSlug":  "jkt48_putri",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_PutriJazyta",
        "isLive":  False
    },
    {
        "name":  "Raisha Syifa",
        "roomId":  "0",
        "avatar":  "../skin/RAISHA_SYIFA_MYTH.jpg",
        "idnSlug":  "jkt48_raisha",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_RaishaSyifa",
        "isLive":  False
    },
    {
        "name":  "Ralyne Van (Gen 13)",
        "roomId":  "0",
        "avatar":  "../skin/RALYNE_VAN_UNCOMMON.jpg",
        "idnSlug":  "jkt48_ralyne",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_RalyneVan",
        "isLive":  False
    },
    {
        "name":  "Reva Fidela (Adel)",
        "roomId":  "0",
        "avatar":  "../skin/REVA_FIDELA_MYTH.jpg",
        "idnSlug":  "jkt48_reva",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_RevaFidela",
        "isLive":  False
    },
    {
        "name":  "Ribka Budiman",
        "roomId":  "0",
        "avatar":  "../skin/RIBKA_BUDIMAN_MYTH.jpg",
        "idnSlug":  "jkt48_ribka",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_RibkaBudiman",
        "isLive":  False
    },
    {
        "name":  "Shabilqis Naila (Nala)",
        "roomId":  "0",
        "avatar":  "../skin/SHABILQIS_NAILA_MYTH.jpg",
        "idnSlug":  "jkt48_shabilqis",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_ShabilqisNaila",
        "isLive":  False
    },
    {
        "name":  "Shani Indira",
        "roomId":  "0",
        "avatar":  "../skin/SHANI_INDIRA_MYTH.jpg",
        "idnSlug":  "jkt48_shani",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_ShaniIndira",
        "isLive":  False
    },
    {
        "name":  "Shania Gracia",
        "roomId":  "0",
        "avatar":  "../skin/SHANIA_GRACIA_MYTH.jpg",
        "idnSlug":  "jkt48_shania",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_ShaniaGracia",
        "isLive":  False
    },
    {
        "name":  "Shania Junianatha",
        "roomId":  "0",
        "avatar":  "../skin/SHANJU_MYTH.jpg",
        "idnSlug":  "jkt48_shanju",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_Shanju",
        "isLive":  False
    },
    {
        "name":  "Sisca Saras",
        "roomId":  "0",
        "avatar":  "../skin/SISCA_SARAS_MYTH.jpg",
        "idnSlug":  "jkt48_sisca",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_SiscaSaras",
        "isLive":  False
    },
    {
        "name":  "Sona Kalyana (Gen 13)",
        "roomId":  "0",
        "avatar":  "../skin/SONA_KALYANA_UNCOMMON.jpg",
        "idnSlug":  "jkt48_sona",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_SonaKalyana",
        "isLive":  False
    },
    {
        "name":  "Tan Zhi Hui Celine",
        "roomId":  "0",
        "avatar":  "../skin/TAN_ZHI_HUI_CELINE_MYTH.jpg",
        "idnSlug":  "jkt48_tan",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_TanZhiHuiCeline",
        "isLive":  False
    },
    {
        "name":  "Victoria Kimberly (Kimmy)",
        "roomId":  "0",
        "avatar":  "../skin/VICTORIA_KIMBERLY_MYTH.jpg",
        "idnSlug":  "jkt48_victoria",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_VictoriaKimberly",
        "isLive":  False
    },
    {
        "name":  "Yesica Tamara (Chika)",
        "roomId":  "0",
        "avatar":  "../skin/YESICA_TAMARA_MYTH.jpg",
        "idnSlug":  "jkt48_yesica",
        "platform":  "IDN Live",
        "roomKey":  "JKT48_YesicaTamara",
        "isLive":  False
    }
]

class ChatMessage(BaseModel):
    room: str
    user: str
    text: str

PRESET_REPLAYS_CACHE = {
    "last_checked": 0,
    "items": []
}

def load_mapped_replays() -> List[Dict]:
    global PRESET_REPLAYS_CACHE, MAPPED_REPLAYS_CACHE
    if time.time() - PRESET_REPLAYS_CACHE["last_checked"] < 300 and PRESET_REPLAYS_CACHE["items"]:
        return PRESET_REPLAYS_CACHE["items"]

    # 1. Scrape freshest faststart MP4 archives directly from preset.id data/videos.json
    try:
        preset_headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
            "Referer": "https://jkt48.preset.id/"
        }
        res = requests.get("https://jkt48.preset.id/data/videos.json", headers=preset_headers, timeout=6)
        if res.status_code == 200:
            raw_list = res.json()
            formatted = []
            for item in raw_list:
                plat = "SHOWROOM" if item.get("platform") in ["S", "SHOWROOM"] else "IDN Live"
                d_str = item.get("date", "").split("T")[0] if item.get("date") else "2026-08-15"
                v_id = item.get("id")
                m_name = item.get("member", "Member")
                if "JKT48" not in m_name:
                    m_name = f"{m_name} JKT48"
                thumb = item.get("thumbnail") or f"https://jkt48.preset.id/data/thumbs/{v_id}.jpg"
                formatted.append({
                    "id": v_id,
                    "raw_id": v_id,
                    "title": item.get("title"),
                    "member": m_name,
                    "platform": plat,
                    "date": d_str,
                    "meta": f"{plat} • {item.get('member')} • {d_str}",
                    "thumb": thumb,
                    "video_url": item.get("video_url")
                })
            if formatted:
                PRESET_REPLAYS_CACHE["last_checked"] = time.time()
                PRESET_REPLAYS_CACHE["items"] = formatted
                MAPPED_REPLAYS_CACHE = formatted
                return formatted
    except Exception as e:
        print(f"Preset.id scrape note: {e}")

    # 2. Fallback to local files
    json_paths = ["mapped_replays.json", "neo-backend/mapped_replays.json", "../mapped_replays.json"]
    for path in json_paths:
        if os.path.exists(path):
            try:
                with open(path, "r", encoding="utf-8") as f:
                    data = json.load(f)
                    if isinstance(data, list) and len(data) > 0:
                        PRESET_REPLAYS_CACHE["last_checked"] = time.time()
                        PRESET_REPLAYS_CACHE["items"] = data
                        MAPPED_REPLAYS_CACHE = data
                        return data
            except Exception:
                pass

    return MAPPED_REPLAYS_CACHE

# Pre-load on startup
load_mapped_replays()

def resolve_master_m3u8(master_url: str) -> str:
    if not master_url or "playback.live-video.net" not in master_url:
        return master_url
    try:
        res = requests.get(master_url, headers={"User-Agent": "Mozilla/5.0"}, timeout=3)
        if res.status_code == 200:
            for line in res.text.splitlines():
                line = line.strip()
                if line.startswith("http") and ".m3u8" in line:
                    return line
    except Exception:
        pass
    return master_url

def fetch_idn_livestreams() -> Dict[str, Dict]:
    global IDN_CACHE
    if time.time() - IDN_CACHE["last_checked"] < 25 and IDN_CACHE["active_lives"]:
        return IDN_CACHE["active_lives"]

    active_streams = {}
    try:
        gql_body = {
            "query": 'query GetLivestreams { getLivestreams(page: 1) { slug title image_url view_count playback_url status live_at creator { username name avatar } } }'
        }
        res = requests.post("https://api.idn.app/graphql", json=gql_body, timeout=4)
        if res.status_code == 200:
            data = res.json()
            lives = data.get("data", {}).get("getLivestreams", [])
            for l in lives:
                if l.get("status") == "live":
                    u_name = (l.get("creator", {}).get("username") or "").lower()
                    c_name = (l.get("creator", {}).get("name") or "").lower()
                    
                    # Strict Filter: Must be genuine JKT48 member or official account
                    is_jkt48 = u_name.startswith("jkt48_") or u_name == "jkt48-official" or "jkt48" in c_name
                    if not is_jkt48:
                        continue

                    raw_playback = l.get("playback_url") or ""
                    active_streams[u_name] = {
                        "platform": "IDN Live",
                        "title": l.get("title"),
                        "playback_url": resolve_master_m3u8(raw_playback),
                        "view_count": l.get("view_count", 0),
                        "image_url": l.get("image_url"),
                        "creator_name": l.get("creator", {}).get("name")
                    }
    except Exception:
        pass

    if not active_streams:
        try:
            res = requests.get(
                "https://mobile-api.idntimes.com/v3/livestreams",
                headers={"User-Agent": "Mozilla/5.0", "Referer": "https://www.idn.app"},
                timeout=4
            )
            if res.status_code == 200:
                data = res.json().get("data", [])
                for l in data:
                    if l.get("status") == "live":
                        u_name = (l.get("creator", {}).get("username") or "").lower()
                        raw_playback = l.get("playback_url") or ""
                        active_streams[u_name] = {
                            "platform": "IDN Live",
                            "title": l.get("title"),
                            "playback_url": resolve_master_m3u8(raw_playback),
                            "view_count": l.get("view_count", 0),
                            "image_url": l.get("image_url"),
                            "creator_name": l.get("creator", {}).get("name")
                        }
        except Exception:
            pass

    IDN_CACHE["last_checked"] = time.time()
    IDN_CACHE["active_lives"] = active_streams
    return active_streams

@app.get("/")
@app.head("/")
def read_root():
    return {
        "status": "online",
        "service": "Alcsta Neo Backend Engine v7.0 (Streaming Video Proxy Active)",
        "total_members": len(MEMBER_ROOMS),
        "total_replays": len(load_mapped_replays()),
        "endpoints": [
            "/api/live/onlives",
            "/api/live/stream_url",
            "/api/yt/replays",
            "/api/yt/search",
            "/api/yt/proxy_stream",
            "/api/config",
            "/api/chat/send",
            "/api/chat/get",
            "/api/chat/clear"
        ]
    }

@app.get("/api/config")
def get_config():
    return {
        "status": "online",
        "app": "Alcsta48 Dual Live Stream Engine",
        "total_members": len(MEMBER_ROOMS),
        "total_replays": len(load_mapped_replays())
    }

@app.get("/api/yt/proxy_stream")
def proxy_stream(path: str = Query(..., description="Path to video on preset"), range: Optional[str] = Header(None)):
    clean_path = path.strip()
    if clean_path.startswith("http"):
        from urllib.parse import urlparse
        clean_path = urlparse(clean_path).pathname

    token_url = "https://jkt48.preset.id/api/play-token"
    preset_headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        "Referer": "https://jkt48.preset.id/",
        "Origin": "https://jkt48.preset.id"
    }
    t_res = requests.get(token_url, params={"path": clean_path}, headers=preset_headers, timeout=6)
    if t_res.status_code != 200:
        raise HTTPException(status_code=400, detail="Token generation failed")
    
    t_data = t_res.json()
    signed_url = f"https://jkt48.preset.id{clean_path}?t={t_data.get('t')}&exp={t_data.get('exp')}"
    
    req_headers = dict(preset_headers)
    if range:
        req_headers["Range"] = range
        
    upstream = requests.get(signed_url, headers=req_headers, stream=True, timeout=12)
    
    resp_headers = {
        "Accept-Ranges": "bytes",
        "Content-Type": upstream.headers.get("Content-Type", "video/mp4"),
        "Cache-Control": "public, max-age=86400, immutable",
    }
    if "Content-Range" in upstream.headers:
        resp_headers["Content-Range"] = upstream.headers["Content-Range"]
    if "Content-Length" in upstream.headers:
        resp_headers["Content-Length"] = upstream.headers["Content-Length"]
        
    status_code = upstream.status_code
    
    def iterfile():
        try:
            for chunk in upstream.iter_content(chunk_size=1024 * 1024):
                if chunk:
                    yield chunk
        except Exception:
            pass
                
    return StreamingResponse(iterfile(), status_code=status_code, headers=resp_headers)

@app.get("/api/yt/search")
def search_replays(q: str = Query(..., description="Member name or title query")):
    if not q or len(q.strip()) < 1:
        return {"status": "success", "count": 0, "items": []}
    
    q_clean = q.lower().strip()
    dataset = load_mapped_replays()
    
    matches = []
    for item in dataset:
        m_name = item.get("member", "").lower()
        t_name = item.get("title", "").lower()
        if q_clean in m_name or q_clean in t_name:
            matches.append(item)
            if len(matches) >= 60:
                break

    return {
        "status": "success",
        "query": q,
        "count": len(matches),
        "items": matches
    }

YOUTUBE_DAILY_CACHE = {
    "last_checked": 0,
    "items": []
}

def scrape_48dailylive_feed() -> List[Dict]:
    global YOUTUBE_DAILY_CACHE
    if time.time() - YOUTUBE_DAILY_CACHE["last_checked"] < 300 and YOUTUBE_DAILY_CACHE["items"]:
        return YOUTUBE_DAILY_CACHE["items"]

    feed_url = "https://www.youtube.com/feeds/videos.xml?channel_id=UCFUXOzBCTnF-k00cBsmKDtA"
    new_items = []
    try:
        res = requests.get(feed_url, headers={"User-Agent": "Mozilla/5.0"}, timeout=6)
        if res.status_code == 200:
            import xml.etree.ElementTree as ET
            root = ET.fromstring(res.content)
            ns = {
                'atom': 'http://www.w3.org/2005/Atom',
                'yt': 'http://www.youtube.com/xml/schemas/2015'
            }
            members_list = [
                "Christy", "Freya", "Gita", "Marsha", "Muthe", "Lulu", "Olla", "Nala", "Eli", 
                "Gracia", "Feni", "Fiony", "Flora", "Jessi", "Kathrina", "Adel", "Lia", "Michie",
                "Indira", "Ella", "Gracie", "Greesel", "Aralie", "Delynn", "Cathy", "Elin", "Chelsea",
                "Oniel", "Cynthia", "Danella", "Daisy", "Gendis", "Maira", "Indah", "Trisha", "Lyn",
                "Levi", "Nayla", "Nachia", "Oline", "Raisha", "Ribka", "Kimmy", "Shani", "Chika", "Zee"
            ]
            for entry in root.findall('atom:entry', ns):
                v_id = entry.find('yt:videoId', ns)
                v_title = entry.find('atom:title', ns)
                v_pub = entry.find('atom:published', ns)
                if v_id is not None and v_title is not None:
                    vid = v_id.text.strip()
                    title = v_title.text.strip()
                    pub_str = v_pub.text.split("T")[0] if v_pub is not None else datetime.datetime.now().strftime("%Y-%m-%d")
                    
                    member_name = "Member JKT48"
                    for m in members_list:
                        if m.lower() in title.lower():
                            member_name = f"{m} JKT48"
                            break
                            
                    platform = "IDN Live" if "idn" in title.lower() else ("SHOWROOM" if "showroom" in title.lower() else "Live YouTube")
                    new_items.append({
                        "id": vid,
                        "raw_id": vid,
                        "title": title,
                        "member": member_name,
                        "platform": platform,
                        "date": pub_str,
                        "meta": f"{platform} • {member_name} • {pub_str}",
                        "thumb": f"https://i.ytimg.com/vi/{vid}/hqdefault.jpg",
                        "video_url": f"https://www.youtube.com/watch?v={vid}"
                    })
    except Exception as e:
        print(f"48DailyLive scrape note: {e}")

    YOUTUBE_DAILY_CACHE["last_checked"] = time.time()
    YOUTUBE_DAILY_CACHE["items"] = new_items
    return new_items

@app.get("/api/yt/replays")
def get_youtube_replays(limit: int = 100):
    dataset = load_mapped_replays()
    return {
        "status": "success",
        "total": len(dataset),
        "count": len(dataset[:limit]),
        "items": dataset[:limit]
    }

@app.get("/api/live/onlives")
def get_onlive_rooms():
    active_rooms = []
    idn_lives = fetch_idn_livestreams()
    
    sr_lives = {}
    try:
        res = requests.get("https://api.crstlnz.my.id/api/now_live?group=jkt48", timeout=4)
        if res.status_code == 200:
            data = res.json()
            if isinstance(data, list):
                for item in data:
                    r_id = str(item.get("room_id") or "")
                    r_key = str(item.get("room_url_key") or "").lower()
                    r_name = str(item.get("main_name") or item.get("name") or "").lower()
                    streams = item.get("streaming_url_list", [])
                    stream_url = streams[0].get("url") if streams else None
                    sr_lives[r_id] = {
                        "room_id": r_id,
                        "room_url_key": r_key,
                        "name": r_name,
                        "stream_url": stream_url,
                        "title": item.get("main_name") or item.get("title") or "Showroom Live",
                        "image_url": item.get("image") or item.get("image_square")
                    }
    except Exception:
        pass

    matched_idn_keys = set()
    matched_sr_ids = set()

    for member in MEMBER_ROOMS:
        is_live = False
        stream_url = None
        platform = member.get("platform", "IDN Live")
        title = ""

        # 1. Fuzzy match IDN Live
        m_name_clean = re.sub(r'[^a-z0-9]', '', member["name"].lower())
        m_slug_clean = re.sub(r'[^a-z0-9]', '', member.get("idnSlug", "").lower())
        
        for u_name, l_info in idn_lives.items():
            u_clean = re.sub(r'[^a-z0-9]', '', u_name.lower())
            c_name_clean = re.sub(r'[^a-z0-9]', '', (l_info.get("creator_name") or "").lower())
            
            if (m_slug_clean and m_slug_clean in u_clean) or (m_name_clean and (m_name_clean in c_name_clean or c_name_clean in m_name_clean or m_slug_clean in c_name_clean)):
                is_live = True
                platform = "IDN Live"
                stream_url = l_info.get("playback_url")
                title = l_info.get("title") or f"Live IDN {member['name']}"
                matched_idn_keys.add(u_name)
                break

        # 2. Match Showroom
        if not is_live:
            m_r_id = str(member.get("roomId", ""))
            m_key_clean = re.sub(r'[^a-z0-9]', '', member.get("roomKey", "").lower())
            
            for s_id, s_info in sr_lives.items():
                s_key_clean = re.sub(r'[^a-z0-9]', '', s_info.get("room_url_key", "").lower())
                s_name_clean = re.sub(r'[^a-z0-9]', '', s_info.get("name", "").lower())
                
                if (m_r_id != "0" and m_r_id == s_id) or (m_key_clean and m_key_clean in s_key_clean) or (m_name_clean and m_name_clean in s_name_clean):
                    is_live = True
                    platform = "SHOWROOM"
                    stream_url = s_info.get("stream_url")
                    title = s_info.get("title") or f"Showroom {member['name']}"
                    matched_sr_ids.add(s_id)
                    break

        active_rooms.append({
            "name": member["name"],
            "roomKey": member["roomKey"],
            "roomId": member.get("roomId", "0"),
            "platform": platform,
            "isLive": is_live,
            "title": title,
            "stream_url": stream_url,
            "avatar": member.get("avatar", "https://i.ibb.co.com/Y4JdtfGH/download.png")
        })

    # 3. Prepend any unmatched active IDN Live streams dynamically (JKT48 only)
    for u_name, l_info in idn_lives.items():
        c_name = (l_info.get("creator_name") or "").lower()
        if (u_name.startswith("jkt48_") or "jkt48" in c_name) and u_name not in matched_idn_keys:
            active_rooms.insert(0, {
                "name": l_info.get("creator_name") or u_name.replace("jkt48_", "").title(),
                "roomKey": f"IDN_{u_name}",
                "roomId": "0",
                "platform": "IDN Live",
                "isLive": True,
                "title": l_info.get("title") or "IDN Live Siaran",
                "stream_url": l_info.get("playback_url"),
                "avatar": l_info.get("image_url") or "https://i.ibb.co.com/Y4JdtfGH/download.png"
            })

    # 4. Prepend any unmatched active Showroom streams dynamically
    for s_id, s_info in sr_lives.items():
        if s_id not in matched_sr_ids:
            active_rooms.insert(0, {
                "name": s_info.get("name") or "Showroom Member",
                "roomKey": f"SR_{s_id}",
                "roomId": s_id,
                "platform": "SHOWROOM",
                "isLive": True,
                "title": s_info.get("title") or "Showroom Live",
                "stream_url": s_info.get("stream_url"),
                "avatar": s_info.get("image_url") or "https://i.ibb.co.com/Y4JdtfGH/download.png"
            })

    return {
        "status": "success",
        "timestamp": time.time(),
        "total_members": len(active_rooms),
        "active_count": len([r for r in active_rooms if r["isLive"]]),
        "rooms": active_rooms
    }

@app.post("/api/chat/send")
def send_chat(msg: ChatMessage):
    room_key = msg.room
    if room_key not in TEMP_CHAT_DB:
        TEMP_CHAT_DB[room_key] = []
        
    chat_entry = {"user": msg.user, "text": msg.text, "timestamp": time.time()}
    TEMP_CHAT_DB[room_key].append(chat_entry)
    
    if len(TEMP_CHAT_DB[room_key]) > 100:
        TEMP_CHAT_DB[room_key].pop(0)
        
    return {"status": "sent", "chat": chat_entry}

@app.get("/api/chat/get")
def get_chats(room: str):
    return {"status": "success", "room": room, "messages": TEMP_CHAT_DB.get(room, [])}

class MusicLikeRequest(BaseModel):
    user_id: str
    song_id: str
    action: str

MUSIC_LIKES_DB: Dict[str, List[str]] = {}
SONG_TOTAL_LIKES: Dict[str, int] = {}

@app.post("/api/music/like")
def toggle_music_like(req: MusicLikeRequest):
    u_id = req.user_id
    s_id = req.song_id
    if u_id not in MUSIC_LIKES_DB:
        MUSIC_LIKES_DB[u_id] = []
        
    if req.action == "like":
        if s_id not in MUSIC_LIKES_DB[u_id]:
            MUSIC_LIKES_DB[u_id].append(s_id)
            SONG_TOTAL_LIKES[s_id] = SONG_TOTAL_LIKES.get(s_id, 0) + 1
    else:
        if s_id in MUSIC_LIKES_DB[u_id]:
            MUSIC_LIKES_DB[u_id].remove(s_id)
            SONG_TOTAL_LIKES[s_id] = max(0, SONG_TOTAL_LIKES.get(s_id, 1) - 1)
            
    return {
        "status": "success",
        "user_id": u_id,
        "song_id": s_id,
        "is_liked": s_id in MUSIC_LIKES_DB[u_id],
        "total_likes": SONG_TOTAL_LIKES.get(s_id, 0),
        "user_likes": MUSIC_LIKES_DB[u_id]
    }

@app.get("/api/music/likes")
def get_user_likes(user_id: str):
    return {
        "status": "success",
        "user_id": user_id,
        "liked_songs": MUSIC_LIKES_DB.get(user_id, [])
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=7860, reload=True)


# =======================================================
# DIRECT HIGH-SPEED AUDIO STREAMING ENGINE (FOR ALCSTIFY)
# =======================================================
AUDIO_STREAM_CACHE = {}

@app.get("/api/music/audio_stream")
def get_audio_stream(q: str = Query(..., description="Song title or search query"), redirect: bool = True):
    global AUDIO_STREAM_CACHE
    q_clean = q.strip()
    if q_clean in AUDIO_STREAM_CACHE:
        cache_item = AUDIO_STREAM_CACHE[q_clean]
        if time.time() - cache_item["ts"] < 14400:  # 4 hours valid
            if redirect:
                return RedirectResponse(cache_item["url"], status_code=302)
            return {"status": "success", "url": cache_item["url"], "title": cache_item.get("title")}

    try:
        import yt_dlp
        ydl_opts = {
            'format': 'bestaudio[ext=m4a]/bestaudio/best',
            'noplaylist': True,
            'quiet': True,
            'default_search': 'ytsearch1:',
            'extract_flat': False
        }
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            query = q_clean if (len(q_clean) == 11 and " " not in q_clean) else f"JKT48 {q_clean} Audio Official"
            info = ydl.extract_info(query, download=False)
            if 'entries' in info and info['entries']:
                entry = info['entries'][0]
            else:
                entry = info
            
            stream_url = entry.get('url')
            title = entry.get('title')
            if stream_url:
                AUDIO_STREAM_CACHE[q_clean] = {
                    "url": stream_url,
                    "title": title,
                    "ts": time.time()
                }
                if redirect:
                    return RedirectResponse(stream_url, status_code=302)
                return {
                    "status": "success",
                    "url": stream_url,
                    "title": title
                }
    except Exception as e:
        print(f"Audio stream extraction note: {e}")

    # Fallback to soundcloud / open search if yt-dlp fails
    raise HTTPException(status_code=404, detail="Audio stream not found")