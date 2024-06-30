import type { ServiceAccount } from "firebase-admin";
import { initializeApp, cert, getApps } from "firebase-admin/app";
import { createClient } from "@supabase/supabase-js";

const activeApps = getApps();

const serviceAccount = {
    type: "service_account",
    project_id: "edumo-school",
    private_key_id: "b4adbdfc22c7da41d683e5fc967e1512453e9025",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC6HueDKXk6znC6\nH9WL4p3PY79u933ILUk41qzEso6UfydFzCEvYV0qrP2XbMAPZPYzbXaom/1JiYGV\nXEAoAYl40yMyk8HeAUOWc/xRYETPV8z9KNb84MXV4GRFEOzg9wf3pUsuBgRvt7Ow\nZkT0nypqD0DIjL0/rqot86bqMDNMlpBPr/17A0oFb0dXbO/AsbnONBLjVU7+HC5s\nysM7aKbVOYEdl72nf1pQcvFI78b2AiY0k8HDRKUat1jYlIl6jPb+EMVoFSPleHcS\nKmezFNBDunTmUMwFYa1xsaxKSodKw+16BbW7nb//efLrqwCZsn7LpC+eSD9stQYG\nCC4y2mkxAgMBAAECggEABz972Y5Bvn9alsz1kSMr7RnKfdpH0jCn832HWzOZkiva\nI4GIYKLPMNcYGw+s8mHb+p25K2YZDjDmKc20C+V0wo6fsMZd8YolZSmyz5fK+4jE\n9AOP97y9x49GUwWOi/uNb7XxVbiomecn/rxvfq08xsY9n3G8+aAQ2DBEYEYB7BS3\nE6I06LHdea+mqVrM/UP9fArTD9hHPOfAKkIr1d+all+XAKXiv7aMSKPwNPpzGNMJ\n6Txly7UROuqfA+RR8MlnTMMXGJ9XsUIPMak2Pf1kLLCvFtHXKBUPGrGfMiCfnnCp\nJ8itZdGW+oly+WRryDp0ofx/tsqkQPxoVFs6Ug1q3wKBgQD+4rnaXl8HiLp7XBhp\nozCNDcXnKXRbQYLAskOA1WkGQC7Rtua60ySRvRz5XpCgkgJ6Nm8HCtjVq5HY37aZ\nVxMBHLC6I0a3A9N51+gvmzWATmbrI1t0FobyEDiCI0pSrm+ojrrgj2VqFkfaGfPI\nzqNCz+jAbqoZu3iJs97yO/KfEwKBgQC67zcMVdsglAgZqz0mu8HuaF0CA83irs7r\nKVm6MaCw0UZlnkXPXLV2Fm5xIMoJQeXAmFFUUC66yg5i0KCACO1r+aTNSov1BXIO\nBgqoppzGkCXFKNxNdW2QBdZCs9mQCLdYnkX7qFWcsrx8aA2IAc2he6kTJFkDtXuu\nR9+1TsirKwKBgQC6CQ4R3nOJ8jf6NfvzjpKvQXBDCrTMroIa14IBlMJ1N390vgSm\nM9orLVbqhCUXrbp1LSnYgAhH3FQ1cQO75BwQ4bn0Ai9pATfnZLkpliV0osTntwTX\nNGIGZ+R2x/9FXeBNrO+lW8RvrBeBjxOqa3gqGcoOOjeZVIXkLA77ytmJVQKBgFUU\nczWGDgmx1k34hgiPBCECFvLH0HkPntWhKFl6JOzVEvlFI/jQ9TYd135dshasi2kw\n6jM5m0sgk5Od6K7dYVH3eW6GM1T9eX+weEFyM4CcMtSdWEdY3tjiDzakrKzFis0m\nnCuB3hVHtEnbAe2ZBIIuyjEQJgNuIjCcPdFDXkmpAoGBAOL3ZF/7pSEZ+eQgXACx\nZAWwEKIW89WIazvqkjX/ykEHZWc9hgP3O755NnGl3FX2rIY612EXHUrew4xFB8T1\nPNc6ZR1o5C2SavV8FJ4HA8kVbBgyh0wpappmej2r4F+HSo54HkMYfxrmS6nWJVQG\n+CBRsyDT8GL1/YJZKQ5JmW6o\n-----END PRIVATE KEY-----\n",
    client_email: "firebase-adminsdk-bnwjf@edumo-school.iam.gserviceaccount.com",
    client_id: "104778877309116090840",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-bnwjf%40edumo-school.iam.gserviceaccount.com",
    universe_domain: "googleapis.com"
};

const initApp = () => {
  return initializeApp({
    credential: cert(serviceAccount as ServiceAccount)
  })
}


export const supabase = createClient(
  'https://tmzegfpzmfjxjfyngbve.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtemVnZnB6bWZqeGpmeW5nYnZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAwOTAyNTgsImV4cCI6MjAyNTY2NjI1OH0.et4H-mtc9HUYu_w9fYckebmiOAVLZ2WmfD-viq26DNA',
);


export const app = activeApps.length === 0 ? initApp() : activeApps[0];