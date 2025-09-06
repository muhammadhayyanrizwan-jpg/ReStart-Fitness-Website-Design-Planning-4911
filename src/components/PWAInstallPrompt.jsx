import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiDownload, FiX } = FiIcons;

const PWAInstallPrompt = ({ onClose }) => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(true);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      setDeferredPrompt(null);
    }
    handleClose();
  };

  const handleClose = () => {
    setShowPrompt(false);
    setTimeout(onClose, 300);
  };

  return (
    <AnimatePresence>
      {showPrompt && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-black border border-yellow-400 rounded-lg p-6 max-w-md w-full relative"
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <SafeIcon icon={FiX} className="w-5 h-5" />
            </button>

            <div className="text-center">
              <div className="mb-4">
                <img
                  src="https://i.ibb.co/5XGmRdLN/Re-Start-Fitness-Center-Gymlogo-and-fav-icon.jpg"
                  alt="ReStart Fitness Logo"
                  className="w-16 h-16 mx-auto rounded-full"
                />
              </div>
              
              <h3 className="text-xl font-bold text-yellow-400 mb-2">
                Install ReStart Fitness App
              </h3>
              
              <p className="text-gray-300 mb-6">
                Get quick access to our gym services, class schedules, and fitness tips. Install our app for a better experience!
              </p>
              
              <div className="flex gap-3">
                <button
                  onClick={handleInstall}
                  className="flex-1 bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2"
                >
                  <SafeIcon icon={FiDownload} className="w-4 h-4" />
                  Install App
                </button>
                
                <button
                  onClick={handleClose}
                  className="flex-1 border border-gray-600 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PWAInstallPrompt;