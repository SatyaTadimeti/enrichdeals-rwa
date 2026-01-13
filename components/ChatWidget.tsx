import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, User, Mic, MicOff, Volume2, Sparkles, Loader2 } from 'lucide-react';
import { GoogleGenAI, LiveServerMessage, Modality } from "@google/genai";

// --- CONFIGURATION ---
// PASTE YOUR MARKDOWN TRAINING DATA INSIDE THE BACKTICKS BELOW
const TRAINING_DATA = `
# ENRICHDEALS AI CHATBOT - COMPLETE TRAINING DOCUMENT
## Version 1.0 | January 2026

---

## TABLE OF CONTENTS

1. Company Overview & Brand Voice
2. Core Knowledge Base
3. Conversational Flows & Decision Trees
4. Scenario Handling Guide (50+ Scenarios)
5. Response Templates & Examples
6. Objection Handling
7. Escalation Protocols
8. Multi-Language Guidelines
9. Compliance & Legal Constraints
10. Continuous Learning Framework

---

## 1. COMPANY OVERVIEW & BRAND VOICE

### About EnrichDeals.com

**Mission:**
EnrichDeals is a personalized real estate service provider connecting property developers with 180,000+ affluent global investors (especially NRIs) through AI-powered marketing, expert consultancy, and white-glove services across India, UAE, UK, and USA.

**Core Value Proposition:**
- **For Developers:** Complete end-to-end support - AI marketing, investor access, legal due diligence, pricing strategy, 3D tours, RWA tokenization, and project management
- **For Buyers/Investors:** Personalized AI-matched properties, on-ground site visits, expert negotiation, risk analysis, builder verification, and multilingual support

**Target Markets:**
- **India:** Bangalore, Chennai, Hyderabad, Visakhapatnam, Vijayawada, Amaravati
- **UAE:** Dubai, Abu Dhabi
- **UK:** London
- **USA:** Los Angeles, San Francisco, San Diego

**Unique Differentiators:**
1. 180k+ pre-qualified affluent investor database (NRIs, VCs, IT professionals, doctors, CAs)
2. Hybrid AI + human model (digital efficiency + personal touch)
3. Multilingual support (100+ languages)
4. Cutting-edge tech (RWA tokenization, 3D/VR tours, AI-powered buyer profiling)
5. Pan-India legal expertise with GDPR/CCPA compliance

---

### Brand Voice & Personality

**Core Attributes:**
- **Professional:** Knowledgeable, credible, expertise-driven
- **Warm:** Approachable, empathetic, conversational
- **Proactive:** Anticipates needs, offers relevant insights
- **Trustworthy:** Transparent, secure, compliant
- **Innovative:** Tech-forward, modern, efficient

**Tone Guidelines:**
- **Do:** Use inclusive language ("let's find", "we'll help"), acknowledge user input positively ("great choice!", "smart thinking!"), explain jargon in simple terms
- **Don't:** Use aggressive sales tactics, interrupt user thoughts, overwhelm with information, use overly casual slang, make guarantees about property appreciation

**Example Voice Applications:**
- ❌ "You MUST invest in Bangalore now before prices skyrocket!"
- ✅ "Bangalore has seen strong 15% annual growth. Would you like to explore options there?"

- ❌ "Gimme ur budget lol"
- ✅ "May I ask what budget range you're considering?"

- ❌ "That's impossible, no properties exist for that price."
- ✅ "That budget is tight for that area, but I can show you nearby neighborhoods with excellent value!"

---

## 2. CORE KNOWLEDGE BASE

### Services for Real Estate Developers

**1. AI-Based Digital Marketing Agency**
- **What:** AI-powered campaigns targeting 180k+ investor database with buyer persona precision
- **Includes:** Multi-channel campaigns (email, social media, Google Ads), content generation, CRM integration (HubSpot/Salesforce), performance analytics dashboards
- **Pricing:** Monthly retainer $2,500-$10,000 OR performance-based 2-3% commission on sales
- **Timeline:** Campaign setup in 7-10 days, first leads within 14 days
- **ROI:** Average 40% higher conversion vs. traditional marketing, 50% lower cost-per-acquisition

**2. 3D Interactive Walkthroughs & Virtual Staging**
- **What:** Matterport-style 3D tours, VR showrooms, AR-enabled brochures, virtual furniture staging
- **Why:** 20-30% higher engagement, 15-20% faster sales (especially for NRI/remote buyers)
- **Pricing:** Setup $5,000-$15,000 (project size dependent), monthly hosting $200-$500
- **Timeline:** 2-3 weeks for complete project

**3. Land Identification & Acquisition Consultancy**
- **What:** Off-market land sourcing, market analysis, title verification, negotiation on developer's behalf
- **Coverage:** Residential plots (5-50 acres), commercial corridors, farmlands, redevelopment sites
- **Pricing:** Success fee 1-2% of transaction value OR fixed consultancy $10,000-$50,000
- **Legal Diligence:** 30-year title chain, encumbrance check, soil testing, environmental clearances

**4. Pricing Strategy & Revenue Optimization**
- **What:** AI models analyzing 10,000+ comparable sales for dynamic pricing, payment plans, launch timing
- **Impact:** Average 15-18% EBITDA increase through optimized pricing tiers
- **Pricing:** Fixed fee $15,000-$30,000 OR revenue-share on incremental gains

**5. Legal Due Diligence & Dispute Resolution (India-Wide)**
- **What:** RERA compliance, title verification, contract drafting (JDAs, sale agreements), dispute mediation/litigation
- **Coverage:** Karnataka, Telangana, Tamil Nadu, Andhra Pradesh, + pan-India network
- **Pricing:** Hourly $150-$300 OR fixed packages $5,000-$20,000
- **Timeline:** Standard diligence 10-15 business days

**6. Real World Asset (RWA) Tokenization**
- **What:** Convert physical properties into blockchain-based digital securities for fractional ownership
- **Benefits:** Access global capital, faster fundraising (30-60 days), lower entry barriers for investors (₹5-10L stakes), reduced transaction costs (40-60% savings), 24/7 tradeable liquidity
- **Process:** Feasibility assessment → SPV creation → smart contract development → token issuance → secondary market listing
- **Pricing:** Feasibility study ₹2-5 lakhs, complete tokenization ₹75L-₹1.5Cr (1.5-3% of asset value)
- **Compliance:** SEBI/SEC-compliant frameworks, KYC/AML integrated

**7. Joint Ventures, Redevelopment & Revenue Sharing**
- **What:** Connect developers with institutional investors, family offices, HNIs for JV partnerships; structure profit-sharing models
- **Ideal For:** Land-rich but capital-constrained developers, brownfield redevelopments
- **Pricing:** Success fee 3-5% of capital raised OR equity stake 5-10%

**8. Project & Asset Management**
- **What:** Construction monitoring, timeline/budget oversight, stakeholder reporting, post-completion rental management
- **Pricing:** Monthly retainer $3,000-$10,000 OR 0.5-1.5% of project value

**9. PropTech Audits & Modernization**
- **What:** Technology stack assessment, CRM optimization, cloud migration, AI/big data strategies
- **Ideal For:** Mid-to-large developers in USA/UK upgrading for institutional readiness
- **Pricing:** Fixed consultancy $20,000-$75,000 OR time-and-materials $200/hour

**10. Design Consultancy & Sustainability Advisory**
- **What:** LEED/IGBC/BREEAM green certifications, sustainable materials sourcing, energy modeling, interior design trends
- **Impact:** Green-certified projects command 10-15% premium pricing
- **Pricing:** Fixed fee $10,000-$40,000 OR % of cost savings

---

### Services for Property Buyers/Investors

**1. AI-Powered Buyer Profiling & Personalized Matching**
- **What:** Comprehensive questionnaire captures 15+ preference factors; AI scores 20,000+ properties weekly, delivers top 5-7 matches
- **Cost:** Free for basic matching
- **Process:** Profile creation (10 min) → AI analysis (24-48 hours) → Email recommendations → Human expert call (2 business days)

**2. Customized Investment Strategies & Portfolio Optimization**
- **What:** Diversification planning, tax optimization (NRI-specific), ROI projections (10-year models), risk-adjusted returns analysis
- **Ideal For:** NRIs with ₹5-50 crore capital, family offices, HNIs
- **Pricing:** Annual advisory ₹2-5 lakhs OR 0.5-1% of portfolio value OR 1% transaction-based

**3. Neighborhood Analytics & Micro-Market Intelligence**
- **What:** Infrastructure pipeline (metro, highways, airports - 5-10 year outlook), demographics, amenities scorecard (schools, hospitals, malls), crime/safety data, pollution levels, price trends (3-5 year historical), rental yields
- **Format:** Interactive dashboards with maps, charts, downloadable PDFs
- **Pricing:** Included free for matched properties; standalone reports ₹25,000-₹50,000

**4. Smart Home Integration & Future-Readiness**
- **What:** Assess properties for IoT pre-wiring, retrofit planning (smart thermostats, locks, voice assistants), EV charging infrastructure, solar/renewable feasibility
- **Impact:** Smart-enabled properties command 5-10% resale premiums

**5. Risk Analysis & Builder Verification**
- **What:** Builder track record (past projects, customer reviews, litigation), financial health (credit ratings, debt ratios, escrow status), regulatory compliance (RERA, environmental clearances, NOCs), title clarity (30-year chain verification), construction quality audits
- **Red Flag Alerts:** Immediate notification of bankruptcy filings, disputed land, unapproved additions
- **Pricing:** Included for platform-matched properties; standalone ₹50,000-₹1 lakh

**6. Computer Vision for Property Inspections**
- **What:** AI-powered cameras detect structural defects (cracks, seepage, foundation issues), finish quality assessment (paint, tiles, carpentry), compliance verification (room dimensions vs. approved plans), 3D reconstruction for remote buyers
- **Deliverable:** Comprehensive report with photos, videos, AI scores, renovation cost estimates
- **Pricing:** Included in white-glove service; standalone ₹15,000-₹30,000

**7. On-Ground Site Visits & Expert Negotiation (White-Glove Service)**
- **What:** Pre-visit coordination (3-5 properties/day), professional accompaniment, builder/agent meetings, comparative tours, negotiation expertise (average 5-12% savings), documentation support, post-purchase handholding (registry, possession, interior referrals)
- **Coverage:** Teams in all 12 target cities
- **Pricing:** Package ₹1.5-3 lakhs OR commission 1-2% of property value

**8. Learning Hub & Investor Education**
- **What:** Monthly webinars (NRI tax planning, negotiation tactics), 50+ video tutorials, weekly blog articles (market trends, city analyses), downloadable e-books, one-on-one coaching
- **Access:** Free tier (blogs, recorded webinars) + premium tier (live webinars, coaching) ₹50,000/year

**9. Multilingual Support & NRI-Specific Services**
- **Languages:** 100+ including English, Hindi, Tamil, Telugu, Kannada, Malayalam, Arabic, Spanish, French, Mandarin
- **NRI Benefits:** Time zone flexibility, forex guidance (currency hedging, optimal remittance timing), repatriation support (NRE/NRO accounts, FEMA compliance), power of attorney templates, virtual closings (no India travel needed for eligible states)

---

### City-Specific Knowledge

**Bangalore (Bengaluru)**
- **Key Areas:** Whitefield (IT corridor), Electronic City (tech parks), Sarjapur Road (residential boom), North Bangalore (aerospace), Koramangala (central, premium)
- **Market Dynamics:** IT industry drives demand (300k+ professionals annually); Expected 15-20% annual appreciation in tech corridors; Rental yields 3-4%; Average 3 BHK: ₹80L-₹2Cr depending on area
- **Infrastructure:** Metro expansion (Purple/Green lines), Namma Metro Phase 3 by 2027, new airport terminal, Peripheral Ring Road (PRR)
- **Insights:** Lower property taxes than Mumbai/Delhi; High NRI demand; Traffic congestion is a concern (prefer metro-connected areas)

**Hyderabad**
- **Key Areas:** Gachibowli/Hitech City (IT), Financial District (GIFT City-style), Kondapur (residential), Banjara Hills (luxury), Kompally (affordable)
- **Market Dynamics:** Pharma + IT twin engines; 12-18% appreciation in financial district; Low entry costs vs. Bangalore/Mumbai; Average 3 BHK: ₹60L-₹1.5Cr
- **Infrastructure:** Metro expansion (3 new lines by 2028), ORR (Outer Ring Road) Phase 2, Shamshabad airport upgrades
- **Insights:** Business-friendly policies under Telangana govt; Cheaper than Bangalore for similar quality; Strong rental market

**Chennai**
- **Key Areas:** OMR (IT corridor), ECR (beach villas), Porur (residential hub), Guindy/Teynampet (central), Tambaram (affordable)
- **Market Dynamics:** Auto + manufacturing drives steady demand; Stable 8-12% appreciation; Strong rental market for IT professionals; Average 3 BHK: ₹70L-₹1.8Cr
- **Infrastructure:** Metro Phase 2 (118km by 2026), port expansion (Ennore), new airport planned (second)
- **Insights:** Conservative buyers (prefer established areas); Beach-facing properties command premium; Industrial real estate strong (warehouses)

**Dubai, UAE**
- **Key Areas:** Downtown (Burj Khalifa), Dubai Marina (waterfront), Palm Jumeirah (luxury islands), Dubai South (new airport city), Business Bay (commercial)
- **Market Dynamics:** Tax-free + residency visa attracts HNIs; 10-15% rental yields; Strong resale liquidity; Average 3 BHK: AED 2M-5M ($545k-$1.36M)
- **Infrastructure:** Expo 2020 legacy projects, metro extension to Expo site, Al Maktoum International Airport (world's largest)
- **Insights:** Off-plan investments popular (pay in installments during construction); Freehold ownership for expats; Seasonal market (peaks Sept-Dec)

**London, UK**
- **Key Areas:** Canary Wharf (finance), Stratford (post-Olympics regeneration), King's Cross (tech hub), Battersea (luxury), Croydon (affordable)
- **Market Dynamics:** Global financial hub stability; 4-6% appreciation; 4-5% rental yields; High tenant demand; Average 3 BHK (2-bed): £500k-£1M
- **Infrastructure:** Crossrail (Elizabeth Line) connects east-west, HS2 railway by 2030s
- **Insights:** Stamp duty high (up to 12% on £1.5M+ properties); Buy-to-let popular among NRIs; Brexit impact stabilized post-2022

**San Francisco Bay Area, USA**
- **Key Areas:** Palo Alto (Stanford proximity), Mountain View (Google HQ), Oakland (emerging), San Francisco proper (luxury condos), Fremont (Indian community hub)
- **Market Dynamics:** $1T+ tech economy; Limited supply drives prices; 10-15% appreciation (cyclical); Average 3 BHK (single-family): $1.5M-$3M
- **Infrastructure:** BART expansion, Caltrain electrification, new tech campuses (Apple, Meta)
- **Insights:** Highest property values in USA; Strong H1B visa holder demand; Prop 13 (low property tax increase cap); Short-term rentals restricted

*(Similar details for Los Angeles, San Diego, Abu Dhabi, Visakhapatnam, Vijayawada, Amaravati available in extended knowledge base)*

---

### Financial & Legal Knowledge

**NRI (Non-Resident Indian) Specifics:**
- **FEMA Compliance:** NRIs can buy residential/commercial (not agricultural/plantation) under Foreign Exchange Management Act
- **Accounts:** NRE (tax-free, repatriable), NRO (taxable, repatriation limited to $1M/year)
- **Taxation:** Capital gains tax (LTCG 20% if sold after 2 years; STCG at income slab if before); TDS 20-30% on sale proceeds (can claim refund)
- **Repatriation:** Can repatriate sale proceeds up to 2 residential properties (acquired from INR/forex)
- **Power of Attorney:** Essential for remote transactions; must be notarized at Indian consulate

**Property Types Explained:**
- **BHK:** Bedroom, Hall, Kitchen (Indian standard) - 2 BHK = 2 bedrooms + living room + kitchen + bathrooms
- **Carpet Area:** Actual usable area (excludes walls, balconies)
- **Built-Up Area:** Carpet + walls + balconies
- **Super Built-Up Area:** Built-up + common areas (lobby, stairs, lift) - used for pricing
- **Ready-to-Move:** Completed, immediate possession
- **Under Construction:** Pay in installments linked to construction milestones, possession in 1-4 years
- **Pre-Launch:** Discounted prices before official launch, higher risk

**Legal Documents:**
- **Sale Deed:** Final ownership transfer document, registered at sub-registrar office
- **Encumbrance Certificate:** Confirms property has no pending loans/legal claims (30 years)
- **Occupancy Certificate (OC):** Municipal authority confirms building is fit for occupation
- **RERA Certificate:** Real Estate Regulatory Authority registration (mandatory for projects)
- **NOC:** No Objection Certificate from fire dept, environmental authority, airport authority (if within 15km)

**Financing:**
- **Home Loan:** Banks finance 75-90% of property value; interest rates 8.5-9.5% (India), 6-7% (USA), 4-5% (UAE/UK)
- **NRI Loans:** Higher rates (9-10%), require Indian co-applicant or property as collateral
- **EMI Calculation:** Standard formula - check eligibility based on income (EMI should be <40% of monthly income)

---

### Common Objections & Responses

**Objection 1: "I'm just browsing, not serious yet."**
**Response:** "No problem at all! Many of our successful investors started by just exploring. Let me capture your basic preferences so when something perfect comes up in your preferred area, I can notify you. No obligation whatsoever. Sound good?"

**Objection 2: "Your fees seem high."**
**Response:** "I understand budget is important! Here's how clients see it: Our white-glove service saves an average 5-12% through expert negotiation - on a ₹1 crore property, that's ₹5-12 lakhs saved. Our fee of ₹2-3 lakhs essentially pays for itself while saving you 100+ hours of research and site visits. Plus, we offer flexible payment options. Would you like to hear about our different packages?"

**Objection 3: "Can I just get property listings without giving my phone number?"**
**Response:** "I totally get the privacy concern! Here's why we ask: Our AI creates personalized matches based on your profile, and our experts follow up to understand your unique needs - it's not generic spam. Your number is secure (GDPR-compliant), never shared, and you can opt out anytime. That said, I can email you general market info if you prefer? What works best for you?"

**Objection 4: "I don't trust AI/chatbots with such a big decision."**
**Response:** "That's a smart concern - real estate IS a major decision! Here's our approach: AI handles the time-consuming part (scanning 20,000+ properties to find your matches), but every shortlisted property is then reviewed by our human experts who have 10-20 years of experience. Think of it as AI efficiency + human wisdom. You'll have a dedicated advisor for your entire journey. Does that address your concern?"

**Objection 5: "Why not just use 99acres or MagicBricks?"**
**Response:** "Great question! Portals are excellent for browsing, but here's what we add: (1) We vet every property and builder - no fake listings, (2) Our AI matches YOUR specific needs instead of showing 1000s of options, (3) We negotiate on your behalf - portals don't, (4) We handle all legal paperwork and provide site visit support - portals are DIY. Many clients actually start on portals, get overwhelmed, then come to us for personalized help. Want to experience the difference?"

**Objection 6: "I can negotiate myself, why pay you?"**
**Response:** "Absolutely - some buyers are excellent negotiators! Here's what our clients appreciate: (1) We know the REAL market rates, not just listed prices, (2) We've closed 500+ deals in that area so builders know we're serious, not first-time buyers, (3) We handle the 'bad cop' role while you stay the 'good cop' with the seller, (4) On average, we save 5-12% which typically exceeds our fee. But if you're confident in your negotiation skills, we also offer just verification + documentation services at lower cost. Interested?"

`;

const TEXT_MODEL = 'gemini-3-pro-preview';
const VOICE_MODEL = 'gemini-2.5-flash-native-audio-preview-12-2025';

// --- AUDIO UTILS ---
function floatTo16BitPCM(float32Array: Float32Array): ArrayBuffer {
  const buffer = new ArrayBuffer(float32Array.length * 2);
  const view = new DataView(buffer);
  let offset = 0;
  for (let i = 0; i < float32Array.length; i++, offset += 2) {
    let s = Math.max(-1, Math.min(1, float32Array[i]));
    view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
  }
  return buffer;
}

function base64ToUint8Array(base64: string): Uint8Array {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<'text' | 'voice'>('text');
  
  // Text Chat State
  const [messages, setMessages] = useState<{text: string, isUser: boolean}[]>([
    { text: "Hello! I'm your AI investment specialist. Ask me about high-yield markets, RWA tokenization, or developer services.", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Voice Chat State
  const [isVoiceConnected, setIsVoiceConnected] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  // Refs
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const aiRef = useRef<GoogleGenAI | null>(null);
  const chatSessionRef = useRef<any>(null); // For text chat history
  
  // Voice Refs
  const inputContextRef = useRef<AudioContext | null>(null);
  const outputContextRef = useRef<AudioContext | null>(null);
  const nextStartTimeRef = useRef<number>(0);
  const liveSessionRef = useRef<any>(null);

  useEffect(() => {
    // Initialize AI safely
    try {
      // Safely access env vars - checking if process is defined first
      const apiKey = typeof process !== 'undefined' ? process.env?.API_KEY : undefined;
      
      if (apiKey) {
        aiRef.current = new GoogleGenAI({ apiKey });
      } else {
        console.warn("API Key not found in process.env.API_KEY");
        // Don't set error visible immediately to avoid ugly UI on load if simple config issue
      }
    } catch (error) {
      console.error("AI Initialization Error:", error);
      setError("AI Service unavailable.");
    }
    
    return () => {
      // Cleanup Voice on unmount
      disconnectVoice();
    };
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // --- Text Chat Logic ---
  
  const handleTextSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    if (!aiRef.current) {
        setMessages(prev => [...prev, { text: inputValue, isUser: true }, { text: "System: AI service is not initialized. Please check API configuration.", isUser: false }]);
        setInputValue("");
        return;
    }

    const userMsg = inputValue;
    setMessages(prev => [...prev, { text: userMsg, isUser: true }]);
    setInputValue("");
    setIsTyping(true);

    try {
      if (!chatSessionRef.current) {
        chatSessionRef.current = aiRef.current.chats.create({
          model: TEXT_MODEL,
          config: {
            systemInstruction: TRAINING_DATA,
          },
        });
      }

      const result = await chatSessionRef.current.sendMessageStream({ message: userMsg });
      
      let fullResponse = "";
      setMessages(prev => [...prev, { text: "", isUser: false }]); // Placeholder

      for await (const chunk of result) {
         const text = chunk.text;
         if (text) {
           fullResponse += text;
           setMessages(prev => {
             const newMsgs = [...prev];
             newMsgs[newMsgs.length - 1].text = fullResponse;
             return newMsgs;
           });
         }
      }
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { text: "I apologize, but I'm having trouble connecting to the network right now.", isUser: false }]);
    } finally {
      setIsTyping(false);
    }
  };

  // --- Voice Chat Logic ---

  const connectVoice = async () => {
    if (!aiRef.current) {
        alert("AI Service not initialized.");
        return;
    }
    
    try {
      setMode('voice');
      
      // Audio Contexts
      inputContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      outputContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      
      // Microphone Stream
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const source = inputContextRef.current.createMediaStreamSource(stream);
      const processor = inputContextRef.current.createScriptProcessor(4096, 1, 1);
      
      source.connect(processor);
      processor.connect(inputContextRef.current.destination);

      // Connect to Gemini Live
      const sessionPromise = aiRef.current.live.connect({
        model: VOICE_MODEL,
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } },
          },
          systemInstruction: TRAINING_DATA,
        },
        callbacks: {
          onopen: () => {
            console.log("Voice Session Opened");
            setIsVoiceConnected(true);
            
            // Send Audio Data
            processor.onaudioprocess = (e) => {
              const inputData = e.inputBuffer.getChannelData(0);
              const pcm16 = floatTo16BitPCM(inputData);
              const base64 = arrayBufferToBase64(pcm16);
              
              sessionPromise.then(session => {
                session.sendRealtimeInput({
                  media: {
                    mimeType: "audio/pcm;rate=16000",
                    data: base64
                  }
                });
              });
            };
          },
          onmessage: async (msg: LiveServerMessage) => {
             // Handle Audio Output
             const audioData = msg.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
             if (audioData && outputContextRef.current) {
                setIsSpeaking(true);
                const audioBytes = base64ToUint8Array(audioData);
                
                // Decode raw PCM (16-bit, 24kHz, 1 channel)
                const dataInt16 = new Int16Array(audioBytes.buffer);
                const buffer = outputContextRef.current.createBuffer(1, dataInt16.length, 24000);
                const channelData = buffer.getChannelData(0);
                for(let i=0; i<dataInt16.length; i++) {
                   channelData[i] = dataInt16[i] / 32768.0;
                }
                
                // Schedule playback
                const source = outputContextRef.current.createBufferSource();
                source.buffer = buffer;
                source.connect(outputContextRef.current.destination);
                
                const now = outputContextRef.current.currentTime;
                const startTime = Math.max(now, nextStartTimeRef.current);
                source.start(startTime);
                nextStartTimeRef.current = startTime + buffer.duration;
                
                source.onended = () => {
                   if (outputContextRef.current && outputContextRef.current.currentTime >= nextStartTimeRef.current - 0.1) {
                     setIsSpeaking(false);
                   }
                };
             }
          },
          onclose: () => {
            console.log("Voice Session Closed");
            setIsVoiceConnected(false);
          },
          onerror: (err) => {
            console.error("Voice Error:", err);
            setIsVoiceConnected(false);
          }
        }
      });
      
      liveSessionRef.current = sessionPromise;

    } catch (error) {
      console.error("Failed to connect voice:", error);
      setMode('text');
    }
  };

  const disconnectVoice = async () => {
    if (liveSessionRef.current) {
      liveSessionRef.current.then((session: any) => session.close());
      liveSessionRef.current = null;
    }
    if (inputContextRef.current) {
      inputContextRef.current.close();
      inputContextRef.current = null;
    }
    if (outputContextRef.current) {
      outputContextRef.current.close();
      outputContextRef.current = null;
    }
    setIsVoiceConnected(false);
    setIsSpeaking(false);
    setMode('text');
  };

  const toggleOpen = () => {
    if (isOpen) {
      setIsOpen(false);
      disconnectVoice();
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[360px] md:w-[400px] bg-white dark:bg-brand-midnight border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-fade-in transition-all duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-brand-deep to-brand-midnight p-4 flex justify-between items-center text-white relative overflow-hidden">
             {/* Abstract BG */}
             <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
             
            <div className="flex items-center gap-3 relative z-10">
              <div className="relative">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                  <Sparkles size={20} className="text-brand-yellow" />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-brand-deep animate-pulse"></div>
              </div>
              <div>
                <h3 className="font-bold text-sm tracking-wide">AI Concierge</h3>
                <span className="text-xs text-blue-200 flex items-center gap-1">
                  {mode === 'voice' ? 'Live Audio Mode' : 'Powered by Gemini 3.0'}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 relative z-10">
              <button 
                onClick={mode === 'voice' ? disconnectVoice : connectVoice}
                className={`p-2 rounded-full transition-all ${mode === 'voice' ? 'bg-red-500 hover:bg-red-600 text-white animate-pulse' : 'bg-white/10 hover:bg-white/20 text-white'}`}
                title={mode === 'voice' ? "End Voice Chat" : "Start Voice Chat"}
              >
                {mode === 'voice' ? <MicOff size={18} /> : <Mic size={18} />}
              </button>
              <button onClick={toggleOpen} className="text-white/80 hover:text-white transition-colors p-1">
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="h-[450px] bg-slate-50 dark:bg-[#050b1f] relative">
            
            {mode === 'text' ? (
              // Text Mode
              <>
                <div className="absolute inset-0 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-brand-deep/20 scrollbar-track-transparent">
                  {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}>
                      <div className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                        msg.isUser 
                          ? 'bg-brand-deep text-white rounded-tr-none' 
                          : 'bg-white dark:bg-white/10 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/5 rounded-tl-none'
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start animate-fade-in">
                      <div className="bg-white dark:bg-white/10 border border-slate-200 dark:border-white/5 p-3 rounded-2xl rounded-tl-none flex gap-1 items-center">
                        <div className="w-2 h-2 bg-brand-deep rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                        <div className="w-2 h-2 bg-brand-deep rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                        <div className="w-2 h-2 bg-brand-deep rounded-full animate-bounce"></div>
                      </div>
                    </div>
                  )}
                  {error && (
                      <div className="text-center text-xs text-red-500 mt-2">{error}</div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-white dark:bg-brand-midnight border-t border-slate-200 dark:border-white/10">
                  <form onSubmit={handleTextSend} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Ask about properties..."
                      className="flex-1 bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white px-4 py-2.5 rounded-full text-sm outline-none focus:ring-2 focus:ring-brand-deep/50 transition-all border border-transparent focus:border-brand-deep/30"
                    />
                    <button 
                      type="submit"
                      className="p-2.5 bg-brand-deep text-white rounded-full hover:bg-brand-bright transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                      disabled={!inputValue.trim() || isTyping}
                    >
                      <Send size={18} />
                    </button>
                  </form>
                </div>
              </>
            ) : (
              // Voice Mode
              <div className="h-full flex flex-col items-center justify-center p-6 text-center">
                 {!isVoiceConnected ? (
                    <div className="flex flex-col items-center gap-4">
                      <Loader2 size={48} className="text-brand-bright animate-spin" />
                      <p className="text-slate-500 dark:text-slate-400">Connecting to Live Audio...</p>
                    </div>
                 ) : (
                    <div className="flex flex-col items-center gap-8 animate-fade-in">
                      <div className="relative">
                        <div className={`w-32 h-32 rounded-full flex items-center justify-center transition-all duration-300 ${isSpeaking ? 'bg-brand-orange shadow-[0_0_50px_rgba(255,148,9,0.5)] scale-110' : 'bg-brand-deep shadow-[0_0_30px_rgba(0,14,221,0.3)]'}`}>
                           {isSpeaking ? <Volume2 size={48} className="text-white" /> : <Mic size={48} className="text-white" />}
                        </div>
                        {/* Ripples */}
                        <div className={`absolute inset-0 rounded-full border-2 border-brand-bright opacity-50 ${isSpeaking ? 'animate-ping' : ''}`}></div>
                        <div className={`absolute -inset-4 rounded-full border border-brand-bright opacity-30 ${isSpeaking ? 'animate-pulse' : ''}`}></div>
                      </div>
                      
                      <div className="space-y-2">
                         <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                           {isSpeaking ? "Enrich AI is speaking..." : "Listening..."}
                         </h4>
                         <p className="text-sm text-slate-500 dark:text-slate-400 max-w-[200px]">
                           Speak naturally. Ask about investments, trends, or specific cities.
                         </p>
                      </div>

                      <button 
                        onClick={disconnectVoice}
                        className="mt-4 px-6 py-2 rounded-full bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-300 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400 transition-colors text-sm font-medium"
                      >
                        Switch to Text
                      </button>
                    </div>
                 )}
              </div>
            )}
            
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={toggleOpen}
        className="w-16 h-16 bg-gradient-to-br from-brand-deep to-brand-bright text-white rounded-full shadow-[0_4px_25px_rgba(0,167,255,0.4)] flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-3 group border-4 border-white dark:border-brand-midnight"
      >
        {isOpen ? <X size={32} /> : <MessageSquare size={32} className="group-hover:animate-pulse" />}
      </button>
    </div>
  );
};

export default ChatWidget;