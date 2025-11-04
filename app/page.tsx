"use client";

import { useFeatureFlagEnabled, usePostHog } from "posthog-js/react";
import { useEffect, useState } from "react";

export default function Home() {
  const posthog = usePostHog();

  // Test with a flag that doesn't exist
  const nonExistentFlag = useFeatureFlagEnabled("something-that-doesnt-exist");
  const anotherNonExistentFlag = useFeatureFlagEnabled("non-existent-flag");

  // Also test with direct posthog methods
  const [directFlagValue, setDirectFlagValue] = useState<any>(undefined);
  const [isFeatureEnabled, setIsFeatureEnabled] = useState<any>(undefined);

  useEffect(() => {
    if (posthog) {
      // Get flag value directly
      const value = posthog.getFeatureFlag("something-that-doesnt-exist");
      setDirectFlagValue(value);

      // Check if feature is enabled
      const enabled = posthog.isFeatureEnabled("something-that-doesnt-exist");
      setIsFeatureEnabled(enabled);

      // Log all values for debugging
      console.log("=== PostHog Feature Flag Test Results ===");
      console.log(
        'useFeatureFlagEnabled("something-that-doesnt-exist"):',
        nonExistentFlag
      );
      console.log(
        'useFeatureFlagEnabled("non-existent-flag"):',
        anotherNonExistentFlag
      );
      console.log(
        'posthog.getFeatureFlag("something-that-doesnt-exist"):',
        value
      );
      console.log(
        'posthog.isFeatureEnabled("something-that-doesnt-exist"):',
        enabled
      );
      console.log("=========================================");
    }
  }, [posthog, nonExistentFlag, anotherNonExistentFlag]);

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "2rem",
        fontFamily: "system-ui, -apple-system, sans-serif",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "2rem",
            textAlign: "center",
            color: "white",
            textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
          }}
        >
          🐛 PostHog Feature Flag Bug Reproduction
        </h1>

        <div
          style={{
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "12px",
            marginBottom: "2rem",
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
        >
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: "700",
              marginBottom: "1.5rem",
              color: "#1a202c",
            }}
          >
            📊 Test Results
          </h2>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div
              style={{
                backgroundColor: "#f7fafc",
                padding: "1.25rem",
                borderRadius: "8px",
                border: "2px solid #e2e8f0",
              }}
            >
              <code
                style={{
                  display: "block",
                  marginBottom: "0.75rem",
                  backgroundColor: "#2d3748",
                  color: "#48bb78",
                  padding: "0.5rem",
                  borderRadius: "4px",
                  fontSize: "0.9rem",
                }}
              >
                useFeatureFlagEnabled('something-that-doesnt-exist')
              </code>
              <div style={{ fontSize: "1.1rem" }}>
                <strong style={{ color: "#4a5568" }}>Returns: </strong>
                <span
                  style={{
                    fontFamily: "monospace",
                    backgroundColor:
                      nonExistentFlag === true ? "#fed7d7" : "#c6f6d5",
                    color: nonExistentFlag === true ? "#9b2c2c" : "#22543d",
                    padding: "0.25rem 0.5rem",
                    borderRadius: "4px",
                    fontWeight: "bold",
                    fontSize: "1rem",
                  }}
                >
                  {String(nonExistentFlag)}
                </span>
                {nonExistentFlag === true && (
                  <span
                    style={{
                      marginLeft: "0.75rem",
                      color: "#e53e3e",
                      fontWeight: "bold",
                    }}
                  >
                    ⚠️ BUG DETECTED: Should be false or undefined!
                  </span>
                )}
              </div>
            </div>

            <div
              style={{
                backgroundColor: "#f7fafc",
                padding: "1.25rem",
                borderRadius: "8px",
                border: "2px solid #e2e8f0",
              }}
            >
              <code
                style={{
                  display: "block",
                  marginBottom: "0.75rem",
                  backgroundColor: "#2d3748",
                  color: "#48bb78",
                  padding: "0.5rem",
                  borderRadius: "4px",
                  fontSize: "0.9rem",
                }}
              >
                useFeatureFlagEnabled('non-existent-flag')
              </code>
              <div style={{ fontSize: "1.1rem" }}>
                <strong style={{ color: "#4a5568" }}>Returns: </strong>
                <span
                  style={{
                    fontFamily: "monospace",
                    backgroundColor:
                      anotherNonExistentFlag === true ? "#fed7d7" : "#c6f6d5",
                    color:
                      anotherNonExistentFlag === true ? "#9b2c2c" : "#22543d",
                    padding: "0.25rem 0.5rem",
                    borderRadius: "4px",
                    fontWeight: "bold",
                    fontSize: "1rem",
                  }}
                >
                  {String(anotherNonExistentFlag)}
                </span>
                {anotherNonExistentFlag === true && (
                  <span
                    style={{
                      marginLeft: "0.75rem",
                      color: "#e53e3e",
                      fontWeight: "bold",
                    }}
                  >
                    ⚠️ BUG DETECTED: Should be false or undefined!
                  </span>
                )}
              </div>
            </div>

            <div
              style={{
                backgroundColor: "#f7fafc",
                padding: "1.25rem",
                borderRadius: "8px",
                border: "2px solid #e2e8f0",
              }}
            >
              <code
                style={{
                  display: "block",
                  marginBottom: "0.75rem",
                  backgroundColor: "#2d3748",
                  color: "#48bb78",
                  padding: "0.5rem",
                  borderRadius: "4px",
                  fontSize: "0.9rem",
                }}
              >
                posthog.getFeatureFlag('something-that-doesnt-exist')
              </code>
              <div style={{ fontSize: "1.1rem" }}>
                <strong style={{ color: "#4a5568" }}>Returns: </strong>
                <span
                  style={{
                    fontFamily: "monospace",
                    backgroundColor: "#edf2f7",
                    color: "#2d3748",
                    padding: "0.25rem 0.5rem",
                    borderRadius: "4px",
                    fontSize: "1rem",
                  }}
                >
                  {String(directFlagValue)}
                </span>
              </div>
            </div>

            <div
              style={{
                backgroundColor: "#f7fafc",
                padding: "1.25rem",
                borderRadius: "8px",
                border: "2px solid #e2e8f0",
              }}
            >
              <code
                style={{
                  display: "block",
                  marginBottom: "0.75rem",
                  backgroundColor: "#2d3748",
                  color: "#48bb78",
                  padding: "0.5rem",
                  borderRadius: "4px",
                  fontSize: "0.9rem",
                }}
              >
                posthog.isFeatureEnabled('something-that-doesnt-exist')
              </code>
              <div style={{ fontSize: "1.1rem" }}>
                <strong style={{ color: "#4a5568" }}>Returns: </strong>
                <span
                  style={{
                    fontFamily: "monospace",
                    backgroundColor:
                      isFeatureEnabled === true ? "#fed7d7" : "#c6f6d5",
                    color: isFeatureEnabled === true ? "#9b2c2c" : "#22543d",
                    padding: "0.25rem 0.5rem",
                    borderRadius: "4px",
                    fontWeight: "bold",
                    fontSize: "1rem",
                  }}
                >
                  {String(isFeatureEnabled)}
                </span>
                {isFeatureEnabled === true && (
                  <span
                    style={{
                      marginLeft: "0.75rem",
                      color: "#e53e3e",
                      fontWeight: "bold",
                    }}
                  >
                    ⚠️ BUG DETECTED: Should be false or undefined!
                  </span>
                )}
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: "1.5rem",
              padding: "1rem",
              backgroundColor: "#fef5e7",
              borderRadius: "8px",
              border: "2px solid #f6e05e",
            }}
          >
            <p style={{ fontSize: "0.95rem", color: "#744210", margin: 0 }}>
              <strong>💡 Expected behavior:</strong> Non-existent feature flags
              should return{" "}
              <code
                style={{
                  backgroundColor: "#2d3748",
                  color: "#ed8936",
                  padding: "2px 4px",
                  borderRadius: "3px",
                }}
              >
                false
              </code>{" "}
              or{" "}
              <code
                style={{
                  backgroundColor: "#2d3748",
                  color: "#ed8936",
                  padding: "2px 4px",
                  borderRadius: "3px",
                }}
              >
                undefined
              </code>
              , not{" "}
              <code
                style={{
                  backgroundColor: "#2d3748",
                  color: "#fc8181",
                  padding: "2px 4px",
                  borderRadius: "3px",
                }}
              >
                true
              </code>
              .
            </p>
            <p
              style={{
                fontSize: "0.95rem",
                marginTop: "0.5rem",
                color: "#744210",
                marginBottom: 0,
              }}
            >
              📋 Check the browser console for detailed logs.
            </p>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "12px",
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
        >
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              marginBottom: "1rem",
              color: "#1a202c",
            }}
          >
            ⚙️ PostHog Configuration
          </h3>
          <pre
            style={{
              backgroundColor: "#2d3748",
              color: "#48bb78",
              padding: "1.25rem",
              borderRadius: "8px",
              overflow: "auto",
              fontSize: "0.9rem",
              margin: 0,
            }}
          >
            {`{
  api_host: '${
    process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com"
  }',
  api_key: '${process.env.NEXT_PUBLIC_POSTHOG_KEY || "phc_test_key_not_real"}',
  person_profiles: 'identified_only'
}`}
          </pre>
          <p
            style={{
              marginTop: "1rem",
              fontSize: "0.9rem",
              color: "#718096",
              marginBottom: 0,
            }}
          >
            📝 <strong>Note:</strong> Using a test key that won't connect to a
            real PostHog instance. Replace with your actual PostHog key in{" "}
            <code
              style={{
                backgroundColor: "#edf2f7",
                padding: "2px 4px",
                borderRadius: "3px",
              }}
            >
              .env.local
            </code>{" "}
            to test against your project.
          </p>
        </div>
      </div>
    </main>
  );
}
