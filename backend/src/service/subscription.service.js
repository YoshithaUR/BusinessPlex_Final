// Simple in-memory storage for newsletter subscriptions
// In production, this should be replaced with a proper database
let subscriptions = new Set();

const subscriptionService = {
  // Check if email is already subscribed
  isSubscribed: (email) => {
    return subscriptions.has(email.toLowerCase());
  },

  // Add new subscription
  addSubscription: (email, name) => {
    const emailLower = email.toLowerCase();
    if (subscriptions.has(emailLower)) {
      return false; // Already subscribed
    }
    subscriptions.add(emailLower);
    return true; // Successfully added
  },

  // Get all subscriptions (for admin purposes)
  getAllSubscriptions: () => {
    return Array.from(subscriptions);
  },

  // Remove subscription (for unsubscribe functionality)
  removeSubscription: (email) => {
    const emailLower = email.toLowerCase();
    return subscriptions.delete(emailLower);
  }
};

export default subscriptionService;
