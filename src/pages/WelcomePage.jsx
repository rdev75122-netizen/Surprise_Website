import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import GradientText from '../components/GradientText';
import './WelcomePage.css';

const WelcomePage = ({ onLogin }) => {
    const [name, setName] = useState('');
    const [partnerName, setPartnerName] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim() || !partnerName.trim()) {
            setError('Please fill in both names! 💕');
            return;
        }

        // Validate specific names
        if (name.trim().toLowerCase() !== 'tanvi' || partnerName.trim().toLowerCase() !== 'dwijesh') {
            setError('Hmm... Those names don\'t match! Try again 💝');
            return;
        }

        onLogin(name, partnerName);
        navigate('/surprise');
    };

    return (
        <div className="welcome-page">
            {/* Animated snowflakes */}
            <div className="snowflakes" aria-hidden="true">
                {[...Array(15)].map((_, i) => (
                    <div key={i} className="snowflake">❅</div>
                ))}
            </div>

            <motion.div
                className="welcome-container"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h1
                    className="welcome-title"
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 0.6,
                        type: "spring",
                        stiffness: 200
                    }}
                >
                    🎄 <GradientText
                        colors={['#ff6b9d', '#ffd700', '#ff8fab', '#ffed4e', '#c06c84']}
                        animationSpeed={5}
                        direction="horizontal"
                        yoyo={true}
                    >
                        New Year Memories
                    </GradientText> 💝
                </motion.h1>

                <motion.p
                    className="welcome-subtitle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    A magical journey awaits... ✨
                </motion.p>

                <motion.form
                    className="welcome-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    <div className="input-group">
                        <label htmlFor="name">Your Name 💖</label>
                        <motion.input
                            whileFocus={{ scale: 1.05 }}
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                setError('');
                            }}
                            placeholder="Enter your first name..."
                            className="name-input"
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="partnerName">Your Partner's Name 💕</label>
                        <motion.input
                            whileFocus={{ scale: 1.05 }}
                            type="text"
                            id="partnerName"
                            value={partnerName}
                            onChange={(e) => {
                                setPartnerName(e.target.value);
                                setError('');
                            }}
                            placeholder="Enter partner's first name..."
                            className="name-input"
                        />
                    </div>

                    {error && (
                        <motion.p
                            className="error-message"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            {error}
                        </motion.p>
                    )}

                    <motion.button
                        type="submit"
                        className="submit-button"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 255, 255, 0.5)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Begin Our Journey 🎁
                    </motion.button>
                </motion.form>

                <div className="hearts">
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="heart"
                            initial={{ opacity: 0.3, y: 0 }}
                            animate={{
                                opacity: [0.3, 0.7, 0.3],
                                y: [-20, -40, -20],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: i * 0.3
                            }}
                        >
                            💝
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default WelcomePage;
