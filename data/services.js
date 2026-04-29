const serviceCatalog = [
  {
    id: 'whole-home-planning',
    sortOrder: 10,
    isHidden: false,
    name: 'Whole-home Smart Planning',
    description: 'System planning for your full home environment',
    showOnHome: true,
    images: [
      '/images/services/consultation-1.jpg',
    ],
    process: [
      {
        title: 'Site Audit',
        detail: 'Review layout, existing devices, and daily routines.',
      },
      {
        title: 'Architecture Draft',
        detail: 'Define platform strategy, compatibility, and priority scope.',
      },
      {
        title: 'Planning Pack',
        detail: 'Deliver setup roadmap, automation direction, and expansion path.',
      },
    ]
  },
  {
    id: 'installation',
    sortOrder: 20,
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
    sortOrder: 30,
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
    sortOrder: 40,
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
    sortOrder: 50,
    isHidden: false,
    name: 'Remote Automation Planning',
    description: 'Remote planning and setup for smart home automation',
    showOnHome: true,
    images: [
      '/images/services/automation-1.jpg',
    ],
    process: [
      {
        title: 'Requirement Intake',
        detail: 'Collect goals, pain points, and desired automation outcomes from the client.',
      },
      {
        title: 'Plan Alignment',
        detail: 'Confirm key details together and provide a clear remote implementation plan.',
      },
      {
        title: 'Client-side Installation',
        detail: 'Client completes device installation and basic smart home setup on-site.',
      },
      {
        title: 'Remote Automation Setup',
        detail: 'Configure scenes, routines, and automation logic remotely, then verify operation.',
      },
    ]
  },
  {
    id: 'network-and-hub-setup',
    sortOrder: 60,
    isHidden: false,
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
  sortOrder: service.sortOrder ?? (index + 1) * 10,
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