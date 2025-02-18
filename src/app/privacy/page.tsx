import PolicyLayout from '@/components/PolicyLayout';

export default function PrivacyPolicy() {
  return (
    <PolicyLayout title="Privacy Policy">
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        
        <h2>1. Information We Collect</h2>
        <p>
          {/* Your privacy policy content */}
        </p>
        
        {/* Add more sections as needed */}
      </div>
    </PolicyLayout>
  );
}
