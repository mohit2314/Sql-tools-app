<script setup lang="ts">
// import Button from 'primevue/button';

interface PricingPlan {
  title: string;
  subtitle: string;
  price: number;
  yearlyPrice: number;
  features: string[];
  buttonText: string;
}

const pricingPlans: PricingPlan[] = [
  {
    title: 'Individual',
    subtitle: 'Ideal for freelancers and small teams',
    price: 12,
    yearlyPrice: 100,
    features: [
      'Up to 2 collaborator',
      '100 CSV uploads',
      'Sql query runnner ',
      'Email support',
    ],
    buttonText: 'Choose Plan',
  },
  {
    title: 'Team',
    subtitle: 'Perfect for growing teams',
    price: 46,
    yearlyPrice: 329,
    features: [
      'Up to 5 collaborator',
      'Unlimited CSV uploads',
      'Query Builder tool',
      'CSV bot tool',
    ],
    buttonText: 'Choose Plan',
  },
  {
    title: 'Enterprise',
    subtitle: 'For large organizations with complex needs',
    price: 89,
    yearlyPrice: 520,
    features: [
      'Unlimited users',
      'Unlimited CSV uploads',
      'Query Builder',
      'Graph Builder',
      'Sql Bot',
      'Priority support',
      'Dedicated account manager',
    ],
    buttonText: 'Contact Us',
  },
];
</script>
<template>
  <div class="pricing-page">
    <div class="pricing-header">
      <h1>Pricing Plans</h1>
      <p>Evaluate skills for any developer role with our comprehensive testing platform.</p>
    </div>

    <div class="pricing-tiers">
      <div class="pricing-tier" v-for="(plan, index) in pricingPlans" :key="index">
        <div class="tier-header">
          <p class="tier-title">{{ plan.title }}</p>
          <p class="tier-subtitle">{{ plan.subtitle }}</p>
          <p class="tier-price">
            <span class="dollar-sign">$</span>
            {{ plan.price }}
            <span class="billing-term">/mo</span>
          </p>
          <p class="billed-yearly">Billed yearly at ${{ plan.yearlyPrice }}</p>
        </div>
        <div class="tier-features" v-for="(feature, featureIndex) in plan.features" :key="featureIndex">
          <i class="pi pi-check"></i>
          <span>{{ feature }}</span>
        </div>
        <div class="tier-actions">
          <Button :label="plan.buttonText" type="button" primary rounded></Button>
        </div>
      </div>
    </div>

    <div class="cta">
      <p>Still not sure? Contact us today to discuss a custom plan.</p>
      <Button label="Contact Us" type="button" primary rounded></Button>
    </div>
  </div>
</template>



<style scoped>
.pricing-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  font-family: Arial, sans-serif;
}

.pricing-header {
  text-align: center;
  margin-bottom: 4rem;
}

.pricing-header h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.pricing-header p {
  color: #777;
  line-height: 1.5;
}

.pricing-tiers {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
}

.pricing-tier {
  width: 30%;
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.tier-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.tier-subtitle {
  color: #777;
  margin-bottom: 1rem;
}

.tier-price {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.dollar-sign {
  font-size: 0.8rem;
  margin-right: 0.5rem;
}

.billing-term {
  font-size: 0.8rem;
  color: #777;
}

.billed-yearly {
  font-size: 0.8rem;
  color: #999;
  margin-top: 0.5rem;
}

.tier-features {
  margin-bottom: 1rem;
}

.tier-features span {
  margin-left: 1rem;
}

.tier-actions {
  text-align: center;
}

.cta {
  text-align: center;
  margin-top: 4rem;
}

.cta p {
  margin-bottom: 1rem;
}
</style>