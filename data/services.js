const serviceCatalog = [
  {
    id: 'whole-home-planning',
    sortOrder: 0,
    isHidden: false,
    name: 'On-site Smart Home Planning',
    description: 'On-site planning, setup, and automation for your full home environment',
    showOnHome: true,
    images: [
      '/images/services/consultation-1.jpg',
    ],
    process: [
      {
        title: 'Goal & Layout Review',
        detail: 'Review routines, room layout, and existing devices together on-site.',
      },
      {
        title: 'On-site Audit',
        detail: 'Review compatibility, smart home ecosystem choices, and network readiness through an on-site walkthrough.',
      },
      {
        title: 'On-site Installation (Non-electrical)',
        detail: 'Install and pair supported non-electrical devices such as hubs, sensors, and smart locks.',
      },
      {
        title: 'On-site Automation Setup',
        detail: 'Configure scenes and routines on-site, then validate reliability with you before handoff.',
      },
    ]
  },
  {
    id: 'installation',
    sortOrder: 2,
    isHidden: false,
    name: 'Device Installation',
    description: 'On-site setup for locks, lights, sensors, and cameras',
    showOnHome: true,
    images: [
      '/images/services/installation-1.jpg',
    ],
    process: [
      {
        title: 'Pre-install Check',
        detail: 'Confirm mounting points, power access, and network readiness.',
      },
      {
        title: 'On-site Deployment',
        detail: 'Install devices and complete app/network integration.',
      },
      {
        title: 'Commissioning',
        detail: 'Run tests and hand over practical usage guidance.',
      },
    ]
  },
  {
    id: 'troubleshooting',
    sortOrder: 3,
    isHidden: false,
    name: 'Device Troubleshooting',
    description: 'Fix unstable devices, pairing failures, and connection issues',
    showOnHome: true,
    images: [
      '/images/services/consultation-2.jpg',
    ],
    process: [
      {
        title: 'Issue Triage',
        detail: 'Reproduce symptoms and isolate likely fault domains.',
      },
      {
        title: 'Root Cause Analysis',
        detail: 'Pinpoint whether failure is device, network, or configuration-related.',
      },
      {
        title: 'Corrective Fix',
        detail: 'Repair, replace, or reconfigure to restore expected behavior.',
      },
      {
        title: 'Stability Verification',
        detail: 'Validate reliability under normal usage before closeout.',
      },
    ]
  },
  {
    id: 'automation-planning',
    sortOrder: 4,
    isHidden: false,
    name: 'Automation Planning',
    description: 'Design scenes, routines, and trigger logic',
    showOnHome: true,
    images: [
      '/images/services/automation-1.jpg',
    ],
    process: [
      {
        title: 'Routine Mapping',
        detail: 'Capture trigger points, user actions, and edge cases.',
      },
      {
        title: 'Logic Build',
        detail: 'Implement scenes and routines with fallback rules.',
      },
      {
        title: 'Pilot Tuning',
        detail: 'Test flows and refine timing, conditions, and reliability.',
      },
    ]
  },
  {
    id: 'remote-planning',
    sortOrder: 1,
    isHidden: false,
    name: 'Remote Smart Home Planning',
    description: 'Remote planning and setup for smart home automation',
    showOnHome: true,
    images: [
      '/images/services/automation-1.jpg',
    ],
    process: [
      {
        title: 'Goal & Layout Review',
        detail: 'Collect routines, room layout, and current device details via remote consultation.',
      },
      {
        title: 'Remote System Audit',
        detail: 'Review compatibility, smart home ecosystem choices, and network readiness from shared setup details.',
      },
      {
        title: 'Client-side Installation',
        detail: 'Client installs supported devices on-site with our step-by-step remote guidance.',
      },
      {
        title: 'Remote Automation Setup',
        detail: 'We configure scenes and routines remotely, then verify end-to-end operation with you.',
      },
    ]
  },
  {
    id: 'network-and-hub-setup',
    sortOrder: 5,
    isHidden: true,
    name: 'Network & Hub Setup',
    description: 'Prepare hubs, Wi-Fi, and connectivity for reliable smart home control',
    showOnHome: true,
    images: [
      '/images/services/installation-1.jpg',
    ],
    process: [
      {
        title: 'Network Review',
        detail: 'Check router placement, Wi-Fi coverage, and current device load.',
      },
      {
        title: 'Hub Provisioning',
        detail: 'Configure hubs, bridges, and account access for the target ecosystem.',
      },
      {
        title: 'Coverage Tuning',
        detail: 'Adjust placement and settings to reduce dropouts and response delays.',
      },
      {
        title: 'Reliability Test',
        detail: 'Validate core devices and confirm stable control across the home.',
      },
    ]
  }
];

const compareServices = (left, right) => {
  if (left.sortOrder !== right.sortOrder) {
    return left.sortOrder - right.sortOrder;
  }

  return left._sourceIndex - right._sourceIndex;
};

const normalizeService = (service, index) => ({
  ...service,
  sortOrder: service.sortOrder ?? index,
  isHidden: service.isHidden ?? false,
  _sourceIndex: index,
});

const stripInternalFields = (service) => {
  const normalizedService = { ...service };
  delete normalizedService._sourceIndex;
  return normalizedService;
};

const managedServices = serviceCatalog
  .map(normalizeService)
  .filter((service) => service.isHidden !== true)
  .sort(compareServices)
  .map(stripInternalFields);

export const services = managedServices;

export const homeServices = managedServices.filter((service) => service.showOnHome !== false);