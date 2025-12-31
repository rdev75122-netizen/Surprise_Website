import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ConfettiExplosion from 'react-confetti-explosion';
import './GiftBox.css';

const GiftBox = ({ onOpen }) => {
    const [clicks, setClicks] = useState(0);
    const [isShaking, setIsShaking] = useState(false);
    const [isExploding, setIsExploding] = useState(false);

    const handleClick = () => {
        if (clicks === 0) {
            setIsShaking(true);
            setTimeout(() => setIsShaking(false), 500);
            setClicks(1);
        } else if (clicks === 1) {
            setIsExploding(true);
            setTimeout(() => {
                onOpen();
            }, 500);
        }
    };

    return (
        <div className="gift-box-container">
            <AnimatePresence>
                <motion.div
                    className={`gift-box ${isShaking ? 'shake' : ''}`}
                    onClick={handleClick}
                    initial={{ scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Confetti explosion */}
                    {isExploding && (
                        <div className="confetti-container">
                            <ConfettiExplosion
                                force={0.6}
                                duration={2500}
                                particleCount={80}
                                width={1200}
                            />
                        </div>
                    )}

                    {/* Gift Box Lid */}
                    <motion.div
                        className="gift-lid"
                        animate={isExploding ? {
                            y: -100,
                            rotateZ: 45,
                            opacity: 0
                        } : {}}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="lid-top"></div>
                        <div className="bow">
                            <div className="bow-left"></div>
                            <div className="bow-right"></div>
                            <div className="bow-center"></div>
                        </div>
                    </motion.div>

                    {/* Gift Box Base */}
                    <motion.div
                        className="gift-base"
                        animate={isExploding ? {
                            scale: [1, 1.2, 0],
                            opacity: [1, 0.8, 0]
                        } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="ribbon-vertical"></div>
                    </motion.div>

                    {/* Magical particles when exploding */}
                    {isExploding && (
                        <div className="magic-particles">
                            {[...Array(15)].map((_, i) => {
                                const angle = (i / 15) * 360;
                                const distance = 150;
                                const x = Math.cos((angle * Math.PI) / 180) * distance;
                                const y = Math.sin((angle * Math.PI) / 180) * distance;

                                return (
                                    <motion.div
                                        key={i}
                                        className="particle"
                                        style={{
                                            position: 'absolute',
                                            fontSize: '2em',
                                        }}
                                        initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                                        animate={{
                                            x: x,
                                            y: y,
                                            scale: [0, 1.5, 0],
                                            opacity: [0, 1, 0]
                                        }}
                                        transition={{
                                            duration: 1,
                                            delay: Math.random() * 0.2,
                                            ease: "easeOut"
                                        }}
                                    >
                                        {i % 5 === 0 ? '✨' : i % 5 === 1 ? '⭐' : i % 5 === 2 ? '💫' : i % 5 === 3 ? '🌟' : '💝'}
                                    </motion.div>
                                );
                            })}
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default GiftBox;