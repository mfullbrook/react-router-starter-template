import { CheckCircle } from 'lucide-react';
import { PrimaryButton, SecondaryButton, SectionHeading, BodyText } from './ui';
import { useWaitlist } from '~/contexts/WaitlistContext';

const FinalCTA = () => {
  const { openModal } = useWaitlist();
  return (
    <section className="py-20 text-white dark-radial-gradient">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading size="lg" className="mb-6 text-white">
          Ready to Transform Your Call Handling?
        </SectionHeading>
        <BodyText size="lg" color="white" className="mb-8 opacity-90">
          Join the waiting list today and experience 24/7 professional call answering—no missed calls,
          more business, happier customers.
        </BodyText>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <PrimaryButton
            onClick={openModal}
            variant="white"
            className="text-lg"
          >
            Join the waitlist
          </PrimaryButton>
        </div>

        <div className="flex items-center justify-center space-x-6 text-sm opacity-90">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4" />
            <span>Early access available</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4" />
            <span>No commitment required</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4" />
            <span>Be the first to know</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
