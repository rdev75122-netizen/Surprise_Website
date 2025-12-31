import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import GiftBox from '../components/GiftBox';
import MemoryCard from '../components/MemoryCard';
import GradientText from '../components/GradientText';
import '/SurprisePage.css';

const SurprisePage = ({ names }) => {
    const [isBoxOpened, setIsBoxOpened] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const navigate = useNavigate();

    // Sample card data - will be replaced with actual images later
    const memoryCards = [
        { id: 1, image: '/images/image-1.jpeg', text: 'This image shows from where all this started... The day when we just not met physically but emotionally as well...' },
        { id: 2, image: '/images/image-2.jpeg', text: 'This was the time when I entered in your life... The day I first touched you in that dark night n vibe of music... Tune toh mujhe ussi din permission de di thi😂... N how can we forget the night when we talked for hours for the first time 😁' },
        { id: 3, image: '/images/image-3.jpeg', text: 'This was the first time when you planned a date... N it was so beautiful like you ki mujhe abh woh jagah aur tujhse... Dono se pyar ho gaya tha😚😚...' },
        { id: 4, image: '/images/image-4.jpeg', text: 'The first time when u send me ur selfie and trust me, me itna khush hua tha ki pooch mat... Pura din dekhne ke baad bhi Mann hi nahi bhara tha mera 🫠🫠' },
        { id: 5, image: '/images/image-5.jpeg', text: 'Yeh selfies dekhne ke baad sahi me sochta hu... Lagta hai bhagwan ne meri describe ki hui ladki banayi thi lekin sahi time ka wait kar raha tha 🤔😗' },
        { id: 6, image: '/images/image-6.jpeg', text: 'Pehla video call 😁😁... Pata nahi abh aise video calls kab kar payenge wapis 😮‍💨...' },
        { id: 7, image: '/images/image-7.jpeg', text: 'I just love this picture... Hum isme matured lag rahe hai nai?? 😗... Just like married couples humne waisi photo khichi hai... Don\'t u think 🤔😗... ' },
        { id: 8, image: '/images/image-8.jpeg', text: 'Kaash aise hi humesha hug karne mile... Tere saath aisi aur memories banana chahta hu toh yeh mauka phir kab aayega 😮‍💨🫠' },
        { id: 9, image: '/images/image-9.jpeg', text: 'Aise hi sote hue mujhe tujhe phir se dekhna hai apne baaju me... That day I saw the kid in u which is so in love with me n I also get in love with that kid 🥰😘😘...' },
        { id: 10, image: '/images/image-10.jpeg', text: 'The cute smile of yours... Auntyji ko bolna padega kala tika lagane ko... Kahi meri hi nazar na lag jaye iss smile ko 😍😍' },
        { id: 11, image: '/images/image-11.jpeg', text: 'The last happy moment of this year... When u experienced a 3D movie n I\'m glad ki that lucky guy was me besides you 😗😁' },
        { id: 12, image: '/images/image-12.jpeg', text: 'Open Your Special Card 👉💌', isSpecial: true },
    ];

    const handleBoxOpen = () => {
        setIsBoxOpened(true);
    };

    return (
        <div className="surprise-page">
            {/* Floating elements */}
            <div className="floating-elements">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`floating-element ${i % 3 === 0 ? 'star' : i % 3 === 1 ? 'heart' : 'sparkle'}`}
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: -20,
                        }}
                        animate={{
                            y: window.innerHeight + 20,
                            x: Math.random() * window.innerWidth,
                        }}
                        transition={{
                            duration: 10 + Math.random() * 10,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                        }}
                    >
                        {i % 3 === 0 ? '⭐' : i % 3 === 1 ? '💖' : '✨'}
                    </motion.div>
                ))}
            </div>

            <div className="surprise-content">
                <AnimatePresence mode="wait">
                    {!isBoxOpened ? (
                        <motion.div
                            key="gift-section"
                            className="gift-section"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                className="greeting-emoji"
                                animate={{
                                    rotate: [0, 10, -10, 10, 0],
                                    scale: [1, 1.1, 1, 1.1, 1]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatDelay: 1
                                }}
                            >
                                🎉
                            </motion.div>

                            <motion.h1
                                className="greeting-text"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                Hey {names.name}! 💝
                            </motion.h1>

                            <motion.p
                                className="surprise-message"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                Are you ready for the actual surprises? 🎁✨😘😉
                            </motion.p>

                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{
                                    delay: 0.8,
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 15
                                }}
                            >
                                <GiftBox onOpen={handleBoxOpen} />
                            </motion.div>

                            <motion.p
                                className="instruction-text"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.2 }}
                            >
                                Double-click the gift box! 🎁
                            </motion.p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="cards-section"
                            className="cards-section"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <motion.h2
                                className="cards-title"
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <GradientText
                                    colors={['#ff6b9d', '#ffd700', '#ff8fab', '#ffed4e', '#c06c84']}
                                    animationSpeed={5}
                                    direction="horizontal"
                                    yoyo={true}
                                >
                                    Our Beautiful Memories
                                </GradientText> 💕
                            </motion.h2>

                            <div className="cards-grid">
                                {memoryCards.map((card, index) => {
                                    return (
                                        <div key={card.id}>
                                            <MemoryCard
                                                card={card}
                                                index={index}
                                                isSelected={!card.isSpecial && selectedCard === card.id}
                                                onSelect={() => {
                                                    if (card.isSpecial) {
                                                        navigate('/greeting');
                                                    } else {
                                                        setSelectedCard(selectedCard === card.id ? null : card.id);
                                                    }
                                                }}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default SurprisePage;
