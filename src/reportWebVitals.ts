import { ReportHandler } from 'web-vitals';

export function sendToAnalytics(metric:any) {
  // Replace with whatever serialization method you prefer.
  // Note: JSON.stringify will likely include more data than you need.
  const body = JSON.stringify(metric);

  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
  (navigator.sendBeacon && navigator.sendBeacon('/pcb/analytics', body)) ||
      fetch('/pcb/analytics', {body, method: 'POST', keepalive: true});
}


const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
