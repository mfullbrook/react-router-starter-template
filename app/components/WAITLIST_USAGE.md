# Waitlist Modal Usage

The waitlist modal system has been integrated into the WebsiteLayout and can be triggered from any component throughout the site.

## How it works

1. **WaitlistProvider**: Wraps the entire app in `WebsiteLayout.tsx` to provide global modal state
2. **WaitlistModal**: The actual modal component with form and validation
3. **useWaitlist hook**: Access the modal state and controls from any component

## Usage Examples

### In any component, import and use the hook:

```tsx
import { useWaitlist } from '~/contexts/WaitlistContext';

const MyComponent = () => {
  const { openModal } = useWaitlist();

  return (
    <button onClick={openModal}>
      Join the Waitlist
    </button>
  );
};
```

### With existing UI components:

```tsx
import { PrimaryButton } from '~/components/ui';
import { useWaitlist } from '~/contexts/WaitlistContext';

const CallToAction = () => {
  const { openModal } = useWaitlist();

  return (
    <PrimaryButton onClick={openModal}>
      Join the Waitlist
    </PrimaryButton>
  );
};
```

## Components Updated

- `Hero.tsx` - Main hero section "Join the Waitlist" button
- `FinalCTA.tsx` - Final call-to-action "Join the waitlist" button

## Backend Integration

The modal calls a Netlify function at `/.netlify/functions/waitlist-signup` which currently:
- Validates email format
- Logs signup details to stdout
- Returns success/error responses

To enhance the backend, modify `/netlify/functions/waitlist-signup.js` to:
- Save emails to a database (Supabase, PostgreSQL, etc.)
- Send to email marketing service (Mailchimp, ConvertKit, etc.)
- Send confirmation emails
- Integrate with analytics

## Modal Features

- ✅ Email validation
- ✅ Loading states
- ✅ Success confirmation
- ✅ Error handling
- ✅ Blur backdrop
- ✅ Responsive design
- ✅ Keyboard accessible (ESC to close)
- ✅ Click outside to close
