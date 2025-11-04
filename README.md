# PostHog Feature Flag Bug Reproduction

This Next.js app attempts to reproduce a reported bug where `useFeatureFlagEnabled()` returns `true` for non-existent feature flags.

## Bug Description

When calling `useFeatureFlagEnabled('non-existent-flag')` with a flag that doesn't exist, the hook should return `false` or `undefined`.

## How to Run

1. Install dependencies:
```bash
cd posthog-bug-reproduction
npm install
```

2. (Optional) Add your PostHog credentials:
Create a `.env.local` file:
```bash
NEXT_PUBLIC_POSTHOG_KEY=your_actual_posthog_key
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## What to Look For

1. **On the page**: You'll see test results for various PostHog feature flag methods with non-existent flags
2. **In the console**: Detailed logs showing the return values

### Expected Behavior
- `useFeatureFlagEnabled('non-existent-flag')` should return `false` or `undefined`
- `posthog.isFeatureEnabled('non-existent-flag')` should return `false` or `undefined`

### Actual Behavior (if bug exists)
- The methods may return `true` for non-existent flags

## Test Cases

The app tests the following scenarios:
1. `useFeatureFlagEnabled('something-that-doesnt-exist')`
2. `useFeatureFlagEnabled('non-existent-flag')`
3. `posthog.getFeatureFlag('something-that-doesnt-exist')`
4. `posthog.isFeatureEnabled('something-that-doesnt-exist')`

## Files of Interest

- `/app/page.tsx` - Main test page with feature flag checks
- `/app/providers.tsx` - PostHog provider configuration
- `/app/layout.tsx` - Root layout with provider wrapper
