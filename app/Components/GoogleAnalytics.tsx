import { GoogleAnalytics as GoogleAnalyticsNext } from "@next/third-parties/google";

const GoogleAnalytics = ({ GA_TRACKING_ID }: { GA_TRACKING_ID: string }) => {
    return (
        <>
            <GoogleAnalyticsNext gaId={GA_TRACKING_ID} />
        </>
    );
};

export default GoogleAnalytics;
