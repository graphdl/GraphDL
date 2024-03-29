# GraphDL

GraphDL is Data Modeling Language to express Nouns, Verbs, and the relationships between them in the form of `Subect.verb.Object`.

Once your `Nouns` and `Verbs` are defined, you can then develop `Actions` which are functions that can be executed on the `Nouns` and `Verbs` and `Triggers` which are functions that are executed when an `Action` is executed.

Every `Action` generates an `Event`


```typescript
import { createGraph } from '@graphdl/core'

export const SaaS = createGraph({
  nouns: {
    SaaS: { is: 'SoftwareApplication', as: 'Service' },
    App: 'WebApplication',
    API: 'WebAPI',
    Provider: ['Brand','Organization'],
    Customer: ['Person?','Organization?'],
    Plan: { is: 'Service', at: 'PriceSpecification' },
    Payment: ['PaymentCard?','BankAccount?'],
    User: { is: 'Person', in: 'Organization?'},
    Bot: { is: 'SoftwareApplication', as: 'Bot', from: 'Organization' },
    Visitor: { is: 'Person', notBy: 'Bot', notOf: 'User' },
    Request: { is: 'HttpRequest', in: 'Session' },
    APIRequest: { is: 'Request', to: 'API', by: 'User', with: 'APIKey' },
    APIKey: { is: 'ActionAccessSpecification', of: 'APIRequest', to: 'API' },
    Session: { is: 'TimeInterval', from: 'Request' },
    Visit: { is: 'Session', by: 'Person', notBy: 'Bot' },
    Registration: { is: 'RegisterAction', by: 'Person' },
    ConversionRate: { is: 'QuantitativeValue', of: 'Visit', to: 'Registration' },
    Login: { is: 'LoginAction', by: 'User' },
    Logout: { is: 'LogoutAction', by: 'User' },
    Activation: { is: 'ActivateAction', by: 'User' },
    ActivationRate: { is: 'QuantitativeValue', of: 'Registration', to: 'Activation' },
    Subscription: { is: 'SubscribeAction', to: 'Service', on: 'Plan', by: 'Customer' },
    SubscriptionRate: { is: 'QuantitativeValue', of: 'Registration', to: 'Subscription' },
    Churn: { is: 'UnsubscribeAction', to: 'Service', by: 'Customer' },
    ChurnRate: { is: 'QuantitativeValue', of: 'Subscription', to: 'Churn' },
    Revenue: { is: 'MonetaryAmount', of: 'Subscription', to: 'Provider' },
    ARR: { is: 'MonetaryAmount', of: 'Subscription', to: 'Provider', per: 'TimeInterval', in: 'Year' },
    MRR: { is: 'MonetaryAmount', of: 'Subscription', to: 'Provider', per: 'TimeInterval', in: 'Month' },
    ARPU: { is: 'MonetaryAmount', of: 'Subscription', to: 'Provider', per: 'Customer' },
    NRR: { is: 'MonetaryAmount', of: 'Subscription', to: 'Provider', per: 'TimeInterval', in: 'Year', from: 'Churn' },
  }
})
```