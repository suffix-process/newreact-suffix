// src/pages/PostDetail.tsx
// import React from 'react';
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail, Printer } from 'lucide-react';
import { RecommendedPanel } from '../components/RecommendedPanel';


interface PostData {
    id: number;
    category: string;
    title: string;
    content: string;
    image: string;
    date: string;
}

// Sample post data; replace with API fetch as needed
const samplePosts: PostData[] = [
    {
        id: 1,
        category: 'Financial Services & Analytics',
        title: 'The role of AI in detecting financial anomalies and fraud',
        image: 'https://images.unsplash.com/photo-1709120395858-92f1c7c577f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFRoZSUyMHJvbGUlMjBvZiUyMEFJJTIwaW4lMjBkZXRlY3RpbmclMjBmaW5hbmNpYWwlMjBhbm9tYWxpZXMlMjBhbmQlMjBmcmF1ZHxlbnwwfHwwfHx8MA%3D%3D',
        date: 'June 5, 2025',
        content: `
        As banks and payment platforms process millions of transactions every day, manual review of each payment or transfer is simply impossible. Artificial Intelligence (AI) has emerged as a powerful tool for spotting suspicious activity—often in real time—by learning the normal “signature” of customer behavior and detecting deviations that may signal fraud.

        AI-driven anomaly detection typically combines:

        • **Unsupervised learning** (e.g. clustering or autoencoders) to flag transactions that sit far outside normal patterns without needing prior examples of fraud.  
        • **Supervised classification** models, trained on historical labeled data, to score each transaction’s risk level.  
        • **Hybrid rule-based logic**, embedding domain expertise (e.g. velocity limits, high-risk geographies) to reduce false positives.

        When deployed together, these techniques can detect a range of threats—from stolen-card use at ATMs to sophisticated “smurfing” schemes that spread small amounts across many accounts. Leading financial institutions report that AI can reduce fraud losses by up to 60% and slash investigation times by 70%, all while improving customer experience by minimizing unnecessary declines.

        Beyond detection, AI platforms also enable:
        - **Automated case management**, where high-risk alerts are automatically routed to specialized teams.  
        - **Continuous learning**, allowing models to evolve as fraudsters change tactics.  
        - **Regulatory reporting**, by generating audit trails and compliance dashboards.

        By harnessing the speed and scale of AI, banks and payment providers not only protect their bottom line, but also strengthen customer trust and stay ahead of ever-evolving fraud schemes.
        `.trim(),
    },
    {
        id: 2,
        category: 'Urban Mobility & Sustainability',
        title: 'Driving Toward Sustainable Cities: More sustainable transit starts at the fare',
        image: 'https://images.unsplash.com/photo-1719381565370-86f9d7a9fc34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFRoZSUyMHJvbGUlMjBvZiUyMEFJJTIwaW4lMjBkZXRlY3RpbmclMjBmaW5hbmNpYWwlMjBhbm9tYWxpZXMlMjBhbmQlMjBmcmF1ZHxlbnwwfHwwfHx8MA%3D%3D',
        date: 'July 10, 2025',
        content: `
      Public transit is the backbone of any thriving city—but without the right pricing incentives, overcrowding, underuse, and funding shortfalls can all undermine ridership and environmental goals. By rethinking fare structures, agencies can encourage off-peak travel, reward frequent riders, and channel revenue into green upgrades.
      
      **Dynamic & Off-Peak Pricing**  
      Just as airlines adjust ticket prices by demand, transit operators can offer lower fares during non-rush hours to spread passenger loads more evenly. Studies show off-peak discounts of 20–30% can boost mid-day ridership by up to 15%, reducing the need for costly peak-only capacity expansions.
      
      **Distance & Zone-Based Models**  
      Moving from flat-rate fares to distance-based or zone-based systems ensures that those traveling further—often for jobs in outlying areas—pay their fair share. London’s Oyster pay-as-you-go model, for example, caps daily spending while charging per-mile rates, delivering both equity and predictability for riders.
      
      **Subscription & Loyalty Programs**  
      Monthly and annual passes already exist, but adding “loyalty miles” or credits for eco-friendly behaviors (like walking to a station) can deepen engagement. When riders know they’re earning rewards toward discounted trips or partner offers (e-scooters, bike-shares), they’re more likely to choose public transit over single-occupancy cars.
      
      **Equity & Accessibility**  
      Any fare redesign must include concessions for low-income riders, students, seniors, and people with disabilities. Targeted subsidies and “mobility wallets” that refill automatically based on need help ensure that fare changes don’t create barriers to essential travel.
      
      **Reinvesting Revenue**  
      Perhaps most critically, fare-box gains should circle back into service enhancements—new zero-emission buses, station upgrades, real-time arrival apps, and last-mile connections. When passengers see tangible improvements funded by smart pricing, trust grows and ridership climbs.
      
      By aligning fares with demand, distance, and rider needs—while safeguarding equity—cities can unlock a virtuous cycle: healthier transit systems, greener streets, and more livable urban centers for everyone.
        `.trim(),
    },
    {
        id: 3,
        category: 'Food Security & Technology',
        title: 'Two states leading the way in SNAP EBT modernization, fraud prevention',
        image: 'https://images.unsplash.com/photo-1670071479287-a19c0581bda8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VHdvJTIwc3RhdGVzJTIwbGVhZGluZyUyMHRoZSUyMHdheSUyMGluJTIwU05BUCUyMEVCVCUyMG1vZGVybml6YXRpb24lMkMlMjBmcmF1ZCUyMHByZXZlbnRpb258ZW58MHx8MHx8fDA%3D',
        date: 'August 15, 2025',
        content: `
      As SNAP programs across the country move from paper coupons to Electronic Benefit Transfer (EBT) cards, some states are pushing the envelope by integrating mobile wallets, real-time analytics, and AI-based fraud detection to protect benefits and improve user experience.
      
      **California’s Digital EBT Wallet**  
      California launched a pilot mobile app that lets recipients check balances, view transaction history, and receive instant notifications for each swipe. Behind the scenes, a machine-learning engine analyzes spending patterns—flagging suspicious high-value purchases or unusual retailer activity in real time. Early results show a **40% reduction** in reported fraud cases and a **25% drop** in lost‐card replacement requests.
      
      **New York’s Predictive Fraud Platform**  
      New York State integrated statewide EBT data with retailer point-of-sale systems and third-party analytics. By correlating purchase velocity, geolocation anomalies, and device‐fingerprinting, their “FraudWatch” dashboard surfaces high-risk accounts for immediate review. In its first six months, the platform identified over **$2.3 million** in potentially fraudulent transactions, recovering 15% of those funds back into the program.
      
      **Key Success Factors**  
      - **Data Sharing & Privacy**: Both states executed strong data-use agreements with retailers and secured robust encryption, maintaining recipient privacy even as they share transaction feeds.  
      - **Real-Time Alerts**: Automated SMS and email alerts to caseworkers and recipients ensure quick action on flagged activity.  
      - **Continuous Model Training**: By retraining AI models monthly with newly confirmed fraud cases, detection accuracy has climbed past 95%.
      
      These examples show that by combining modern EBT delivery with advanced analytics and stakeholder collaboration, states can both streamline benefits access and safeguard taxpayer dollars—paving the way for nationwide SNAP program modernization.
        `.trim(),
    },
    {
        id: 4,  // or whatever the next available ID is
        category: 'Business Process Automation',
        title: 'Five big benefits to automating and digitizing your mailroom',
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D',
        date: 'September 1, 2025',
        content: `
      In today’s fast-moving business environment, the traditional mailroom—where incoming paper is sorted, scanned, and routed manually—can become a bottleneck. By automating and digitizing these processes, organizations unlock faster response times, better compliance, and significant cost savings. Here are five key benefits:
      
      1. **Accelerated Document Processing**  
         Automated capture tools scan and classify incoming mail at the speed of machine vision—processing hundreds of envelopes per minute. What once took days of manual sorting now happens in a matter of hours, ensuring time-sensitive documents (invoices, contracts, customer forms) are available in your workflows immediately.
      
      2. **Improved Accuracy & Reduced Errors**  
         Human mail clerks can misfile or overlook critical items, but AI-driven OCR and classification engines achieve >99% accuracy in reading addresses, extracting metadata, and tagging documents. This drastically cuts downstream errors—reducing misrouted correspondence and the cost of manual rework.
      
      3. **Enhanced Compliance & Auditability**  
         A digital mailroom creates a complete, tamper-proof audit trail from the moment mail is received. Every scanned image and index field is timestamped and stored in a central repository, making it easy to demonstrate regulatory compliance (e.g., HIPAA, SOX, GDPR) and respond quickly to legal discovery requests.
      
      4. **Seamless Integration with Downstream Systems**  
         Once digitized, mailroom data can be routed automatically into ERP, CRM, or content management platforms via pre-built connectors or APIs. This eliminates manual hand-offs, accelerates invoice processing, and ensures customer communications are logged and visible across all departments.
      
      5. **Scalable & Cost-Effective Operations**  
         Automating high-volume mail processing reduces the need for large central teams in multiple locations. Cloud-native mailroom solutions scale elastically—adding capacity during peak incoming-mail periods without the expense of temporary staffing. Organizations typically see a return on investment in under 12 months.
      
      By modernizing your mailroom—turning physical mail into instantly actionable digital data—you not only boost operational speed and accuracy, but also free up your people to focus on higher-value tasks, driving greater efficiency across the enterprise.
        `.trim(),
    },
    {
        id: 5,
        category: 'Operational Excellence & Analytics',
        title: 'Preventing $26.6M in erroneous spend for a global manufacturer',
        image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D',
        date: 'October 20, 2025',
        content: `
      Global manufacturers handle thousands of invoices and purchase orders every day. Even a small error rate—mispriced parts, duplicate payments, or misrouted approvals—can cascade into millions of dollars in overpayments. By applying a combination of advanced analytics and robotic process automation (RPA), one global manufacturer uncovered and prevented $26.6 million in erroneous spend in just six months.
      
      **Automated Spend Monitoring**  
      Using RPA bots to ingest and normalize invoice data, the analytics platform continuously applies rules—unit-price thresholds, contract-rate validations, and duplicate detection—to flag high-risk transactions in real time. This replaced a manual, quarterly audit process that caught issues months too late.
      
      **Machine Learning for Anomaly Detection**  
      Beyond static rules, a supervised learning model was trained on historical invoice stream data—marking known exceptions as “good” or “bad.” The model now surfaces subtle patterns, such as slight price variances on bulk orders or repeated off-contract supplier use, that rules alone would miss.
      
      **Seamless Workflow Integration**  
      Exceptions automatically create tickets in the manufacturer’s procurement system, routing them to the correct buyer or finance manager with all supporting documents attached. What once took days of back-and-forth emails now takes minutes, accelerating resolution and reducing risk exposure.
      
      **Quantifiable ROI**  
      - **$26.6 million** recovered through prevented overpayments  
      - **75%** reduction in manual review hours  
      - **50%** faster invoice cycle time, improving supplier relationships  
      
      By combining RPA-driven data capture with AI-powered analytics and closed-loop workflows, this manufacturer turned a costly compliance headache into a strategic advantage—protecting margin and freeing up teams to focus on value-add activities.
        `.trim(),
    },
    {
        id: 6,
        category: 'Healthcare Delivery & Compliance',
        title: 'Three critical strategies for a smooth Medicaid pharmacy deployment',
        image: 'https://media.istockphoto.com/id/976370312/photo/content-marketing-content-data-blogging-media-publication-information-vision-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=fhaShDVgDzc-bnqn06OytL86ddRdTXd7Ke3VDPuZAws=',
        date: 'November 5, 2025',
        content: `
      Deploying a new Medicaid pharmacy benefit requires balancing operational efficiency, regulatory compliance, and patient experience. Here are three strategies that large health plans have used to roll out new pharmacy systems smoothly—minimizing disruptions and ensuring members get the medications they need.
      
      **1. Early Stakeholder Alignment**  
      Engage payers, PBMs, provider groups, and advocacy organizations from Day 1 to map out formulary transitions, prior-authorization rules, and coverage timelines. Creating a cross-functional governance council prevents last-minute policy conflicts and ensures clinical teams sign off on new benefit designs before member communications go live.
      
      **2. Phased Data Migration & Testing**  
      Perform data reconciliations in stages—first migrating core member eligibility and pharmacy claims histories, then rolling out plan-specific rules in a sandbox. End-to-end testing with real member data (masked for privacy) uncovers issues like mismatched prescriber NPI codes or truncated member IDs. Early pilot launches in two small regions allow live-environment validation before statewide rollout.
      
      **3. Member & Provider Communication**  
      A multi-channel campaign—mailers, SMS alerts, dedicated provider portals, and call-center scripts—ensures everyone knows when a pharmacy benefit changes. Automated reminders help members transfer prescriptions ahead of cutover, and real-time dashboards monitor call-center volume spikes so teams can scale staffing proactively.
      
      By aligning governance, migrating data in controlled phases, and executing targeted communications, health plans can launch complex Medicaid pharmacy systems on time and within budget—reducing “pharmacy downtime” to less than 24 hours and maintaining high medication-adherence rates post-deployment.
        `.trim(),
    },
    ///////////////////////////////////////
    {
        id: 7,
        category: 'Environmental Stewardship',
        title: 'From progress to purpose: Celebrating Earth Day 2025',
        content: `
    Every April 22nd, Earth Day brings together millions of individuals, organizations, and businesses dedicated to environmental stewardship. In 2025, under the theme “From Progress to Purpose,” Suffix Process Solutions joined the global movement with a renewed focus on sustainable operations and community impact.
    
    **Our 2025 Initiatives**  
    - **Carbon Footprint Reduction:** Achieved a 15% decrease in corporate travel emissions by expanding virtual collaboration and investing in renewable energy credits.  
    - **Green Office Certifications:** Three major facilities earned LEED Silver certification, demonstrating commitment to energy efficiency and water conservation.  
    - **Employee Volunteer Days:** Over 500 team members participated in local clean-up events, tree plantings, and environmental education workshops.
    
    **Looking Ahead**  
    Building on this progress, we are piloting advanced waste-management technologies across our campuses and integrating sustainability metrics into our client solutions. By moving from progress to purpose, Earth Day 2025 marks a significant milestone in our journey toward a greener future.
        `.trim(),
        image: 'https://images.unsplash.com/photo-1585867701670-d0209b593584?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2Nlc3NpbmclMjB0byUyMHBhcnBvcyUyMGJsb2d8ZW58MHx8MHx8fDA%3D',
        date: 'April 22, 2025',
      },
      {
        id: 8,
        category: 'Automated Document Solutions',
        title: 'Paperless, painless ... and perfect?',
        content: `
    In an age where speed and accuracy determine competitive advantage, moving from paper-based document workflows to automated, digital processes has never been more critical. But is going paperless truly painless ... and perfect? In many organizations, automated document solutions deliver on many fronts—and here’s how:
    
    1. **Rapid Data Capture**  
    Optical Character Recognition (OCR) and intelligent data extraction convert scanned and digital documents into structured data in seconds, slashing manual entry errors by over 90%.
    
    2. **Seamless Integration**  
    Modern document platforms connect directly to ERP and CRM systems, enabling real-time information flow and eliminating costly process hand-offs.
    
    3. **Cost Savings**  
    By reducing physical storage needs and labor hours, companies often realize a 30–50% reduction in operational expenses within the first year of deployment.
    
    4. **Compliance Assurance**  
    Digital audit trails ensure every document is traceable, tamper-proof, and easily retrievable, simplifying regulatory and legal requests.
    
    5. **Scalability & Flexibility**  
    Cloud-native solutions adapt to seasonal volume spikes without additional headcount, while customizable workflows accommodate unique business rules.
    
    While the transition to a paperless workflow can present change-management challenges, organizations that embrace automated document solutions often achieve near-perfect efficiency—delivering speed, accuracy, and cost control.
        `.trim(),
        image: 'https://media.istockphoto.com/id/625737252/photo/when-the-impossible-became-possible.webp?a=1&b=1&s=612x612&w=0&k=20&c=I2OoKw6qnFWe8SM0SZAjGX2_jPzJxvK_V-94n___lB0=',
        date: 'March 15, 2025',
      },
      {
        id: 9,
        category: 'Customer Experience Transformation',
        title: 'What is Customer Experience (CX) Transformation?',
        content: `
    Customer Experience (CX) Transformation is the strategic redesign of processes, technologies, and culture to place the customer at the center of every interaction. In a landscape where loyalty hinges on positive experiences, CX transformation delivers measurable business value:
    
    **Key Components of CX Transformation**  
    - **Omni-Channel Engagement:** Unifying web, mobile, social, and call-center interactions ensures a consistent customer journey.  
    - **Data-Driven Personalization:** AI and analytics tailor offers and support in real time, boosting satisfaction and revenue growth.  
    - **Process Automation:** Robotic process automation (RPA) streamlines repetitive tasks—like order processing and returns—freeing staff to focus on high-touch interactions.  
    - **Employee Empowerment:** Equipping frontline teams with integrated dashboards and knowledge bases accelerates issue resolution and improves first-contact resolution rates.  
    - **Continuous Feedback Loops:** Real-time sentiment analysis and Net Promoter Score (NPS) tracking enable rapid course correction and innovation.
    
    Companies that invest in CX transformation report up to 30% increases in customer retention, 20% higher revenue per customer, and significant gains in operational efficiency. By reimagining every touchpoint through the lens of the customer, CX transformation turns experience into a strategic differentiator.
        `.trim(),
        image: 'https://images.unsplash.com/photo-1586252997234-c97d95b88ee5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFdoYXQlMjBpcyUyMEN1c3RvbWVyJTIwRXhwZXJpZW5jZSUyMChDWCklMjBUcmFuc2Zvcm1hdGlvbiUzRnxlbnwwfHwwfHx8MA%3D%3D',
        date: 'January 10, 2025',
      },
    // ////////////////////////////////////
    {
        id: 154,
        category: 'Corporate Social Responsibility',
        title: 'From progress to purpose: Celebrating Earth Day 2025',
        content: 'Full article content for Earth Day...',
        image: 'https://via.placeholder.com/800x400?text=Earth+Day+2025',
        date: 'April 22, 2025',
    },
    {
        id: 254,
        category: 'Automated Document Solutions',
        title: 'Paperless, painless ... and perfect?',
        content: 'Full case study content that covers the benefits and challenges of document automation...',
        image: 'https://via.placeholder.com/800x400?text=Document+Solutions',
        date: 'April 11, 2025',
    },
    {
        id: 243,
        category: 'CX Transformation',
        title: 'What is Customer Experience (CX) Transformation?',
        content: 'In-depth blog content on CX Transformation...',
        image: 'https://via.placeholder.com/800x400?text=CX+Transformation',
        date: 'May 1, 2025',
    },
];

const PostDetail: React.FC = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const { id } = useParams<{ id?: string }>();
    const navigate = useNavigate();
    const postId = Number(id);
    const post = samplePosts.find((p) => p.id === postId);

    if (!post) {
        return (
            <div className="container mx-auto px-4 py-12 text-center">
                <h2 className="text-2xl font-semibold">Post not found</h2>
                <button onClick={() => navigate(-1)} className="mt-4 text-blue-500 hover:underline">
                    ← Back
                </button>
            </div>
        );
    }

    return (
        <div className="relative">
            {/* This will slide in from the right */}
            <RecommendedPanel />

            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    {/* Breadcrumb */}
                    <nav className="text-sm text-gray-500 mb-4">
                        <Link to="/" className="hover:underline">Home</Link> {'>'} <Link to="/blogpost" className="hover:underline">Blog Posts</Link>
                    </nav>

                    {/* Header Section */}
                    <div className="md:flex md:items-center md:justify-between bg-white p-6 rounded-lg shadow mb-8">
                        <div className="md:w-1/2">
                            <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
                            <p className="text-gray-600 mb-1">{post.category}</p>
                            <p className="text-gray-600">{post.date}</p>
                            <div className="flex space-x-4 mt-4 text-gray-500">
                                <button aria-label="Share on Facebook" className="hover:text-gray-800"><Facebook size={20} /></button>
                                <button aria-label="Share on Twitter" className="hover:text-gray-800"><Twitter size={20} /></button>
                                <button aria-label="Share on LinkedIn" className="hover:text-gray-800"><Linkedin size={20} /></button>
                                <button aria-label="Email this post" className="hover:text-gray-800"><Mail size={20} /></button>
                                <button aria-label="Print this post" className="hover:text-gray-800"><Printer size={20} /></button>
                            </div>
                        </div>
                        <div className="md:w-1/2 mt-6 md:mt-0">
                            <img src={post.image} alt={post.title} className="w-full h-auto rounded-lg object-cover" />
                        </div>
                    </div>

                    {/* Content */}
                    <article className="prose prose-lg max-w-none bg-white p-6 rounded-lg shadow">
                        {post.content.split('\n').map((para, idx) => (
                            <p key={idx}>{para}</p>
                        ))}
                    </article>
                </div>
            </div>
        </div>
    );
};

export default PostDetail;