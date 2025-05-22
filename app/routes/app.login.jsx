import { useLoaderData } from '@remix-run/react';
import { Page, Card, Layout, Form, FormLayout, Checkbox, TextField, Button } from '@shopify/polaris';
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
        <Page fullWidth>
            <Layout>
            <Card>
                <Layout.Section>
                    <Form onSubmit={handleSubmit}>
                        <FormLayout>
                            <Checkbox
                                label="Sign up for the Polaris newsletter"
                                checked={newsletter}
                                onChange={handleNewsLetterChange}
                            />

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

                            <Button submit>Submit</Button>
                        </FormLayout>
                    </Form>
                </Layout.Section>
                </Card>
            </Layout>
        </Page>
    );
}
