import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '/GiftBox.css';

const GiftBox = ({ onOpen }) => {
    const [clickCount, setClickCount] = useState(0);
    const [isShaking, setIsShaking] = useState(false);
    const [isExploding, setIsExploding] = useState(false);

    const handleClick = () => {
        if (isExploding) return;

        const newCount = clickCount + 1;
        setClickCount(newCount);

        if (newCount === 1) {
            // First click - box shakes
            setIsShaking(true);
            setTimeout(() => {
                setIsShaking(false);
                setClickCount(0); // Reset if second click didn't come
            }, 1500);
        } else if (newCount === 2) {
            // Second click - box explodes
            setIsExploding(true);
            setTimeout(() => {
                onOpen();
            }, 2000);
        }
    };

    return (
        <div className="gift-box-container" onClick={handleClick}>
            <AnimatePresence>
                {!isExploding ? (
                    <motion.div
                        className="gift-box"
                        animate={isShaking ? {
                            rotate: [0, -10, 10, -10, 10, -5, 5, 0],
                            scale: [1, 1.05, 1.05, 1.05, 1.05, 1.02, 1.02, 1],
                        } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Gift Box Lid */}
                        <motion.div
                            className="gift-lid"
                            animate={isExploding ? {
                                y: [-10, -80, -150],
                                rotateZ: [0, 15, 45],
                                rotateX: [0, 20, 60],
                                opacity: [1, 1, 0],
                                scale: [1, 1.1, 0.8]
                            } : {}}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut"
                            }}
                        >
                            <div className="lid-ribbon-h"></div>
                            <div className="lid-ribbon-v"></div>
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
                                scale: [1, 1.15, 0.9],
                                opacity: [1, 1, 0]
                            } : {}}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut"
                            }}
                        >
                            <div className="base-ribbon-h"></div>
                            <div className="base-ribbon-v"></div>

                            {/* Box sides that explode outward */}
                            <motion.div
                                className="box-side box-front"
                                animate={isExploding ? {
                                    y: [0, 100],
                                    rotateX: [0, 90],
                                    opacity: [1, 0]
                                } : {}}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            />
                            <motion.div
                                className="box-side box-back"
                                animate={isExploding ? {
                                    y: [0, -100],
                                    rotateX: [0, -90],
                                    opacity: [1, 0]
                                } : {}}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            />
                            <motion.div
                                className="box-side box-left"
                                animate={isExploding ? {
                                    x: [0, -100],
                                    rotateY: [0, -90],
                                    opacity: [1, 0]
                                } : {}}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            />
                            <motion.div
                                className="box-side box-right"
                                animate={isExploding ? {
                                    x: [0, 100],
                                    rotateY: [0, 90],
                                    opacity: [1, 0]
                                } : {}}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            />
                        </motion.div>

                        {/* Explosion particles */}
                        {isExploding && (
                            <div className="explosion-particles">
                                {[...Array(40)].map((_, i) => {
                                    const angle = (i / 40) * 360;
                                    const distance = 150 + Math.random() * 150;
                                    const x = Math.cos(angle * Math.PI / 180) * distance;
                                    const y = Math.sin(angle * Math.PI / 180) * distance;

                                    return (
                                        <motion.div
                                            key={i}
                                            className="explosion-particle"
                                            initial={{
                                                x: 0,
                                                y: 0,
                                                scale: 0,
                                                opacity: 1
                                            }}
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
                ) : null}
            </AnimatePresence>
        </div>
    );
};

export default GiftBox;
