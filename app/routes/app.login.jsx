import { useLoaderData } from '@remix-run/react';
import { Page, LegacyCard, Layout, Form, FormLayout, Checkbox, TextField, Button } from '@shopify/polaris';
import { useState, useCallback } from 'react';
// ✅ Provide a loader function
export const loader = async (request) => {
    return null;
};

export default function Login() {
    const [newsletter, setNewsletter] = useState(false);
    const [email, setEmail] = useState('');

    const handleSubmit = useCallback(() => {
        setEmail('');
        setNewsletter(false);
    }, []);

    const handleNewsLetterChange = useCallback(
        (value) => setNewsletter(value),
        [],
    );

    const handleEmailChange = useCallback((value) => setEmail(value), [])
    return (
        <Page>
            <Layout>
                <Layout.Section>
                    <LegacyCard sectioned>
                        <Text variant="headingMd" as="h2">Login</Text>
                        <Form onSubmit={handleSubmit}>
                            <FormLayout>
                                <TextField
                                    value={email}
                                    onChange={handleEmailChange}
                                    label="Email"
                                    type="email"
                                    autoComplete="email"
                                    helpText={
                                        <span>
                                            We’ll use this email address to inform you on future changes to
                                            Polaris.
                                        </span>
                                    }
                                />

                                <Button variant="primary" fullWidth>Submit</Button>
                            </FormLayout>
                        </Form>
                    </LegacyCard>
                </Layout.Section>
            </Layout>
        </Page>
    );
}
