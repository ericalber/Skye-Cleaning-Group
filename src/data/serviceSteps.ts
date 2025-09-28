import type { StepItem } from '@/components/ServiceSteps'

export const serviceStepsBySlug: Record<string, StepItem[]> = {
  'recurring-cleaning': [
    { title: 'Concierge intake', description: 'We align cleaning cadence, restricted zones, and hospitality preferences with estate managers or resident teams.' },
    { title: 'Signature staging', description: 'Specialists set scent diffusers, prep textiles, and assemble finish-safe caddies before any microfiber touches the space.' },
    { title: 'Zone choreography', description: 'Rooms are detailed in sequenced zones to respect family schedules, conferencing, and high-touch surfaces.' },
    { title: 'Executive reporting', description: 'You receive a photographic recap with supply levels, maintenance notes, and next-visit recommendations.' },
  ],
  'one-time-deep-clean': [
    { title: 'On-site briefing', description: 'We walk the property with principals noting restoration priorities, delicate finishes, and staging goals.' },
    { title: 'Detail prep', description: 'Teams mask surfaces, deploy HEPA filtration, and soak appliances to accelerate deep extraction.' },
    { title: 'White-glove reset', description: 'Millwork, fixtures, grout, and furnishings receive precision attention with steam, polish, and enzyme chemistry.' },
    { title: 'Final sign-off', description: 'A supervisor tours every room with you, logging punch-list items and future maintenance checkpoints.' },
  ],
  'move-in-move-out': [
    { title: 'Turnover audit', description: 'We capture builder punch items, appliance status, and storage nooks to prepare for a flawless handover.' },
    { title: 'Construction dust purge', description: 'From ceiling coves to cabinet interiors, microfiltration teams eliminate residue and debris.' },
    { title: 'Finishing flourish', description: 'Hardware, glass, and stone get boutique-level treatments so the space photographs and smells immaculate.' },
    { title: 'Keys-ready wrap', description: 'A digital checklist confirms every request before we hand the space back to brokers or new residents.' },
  ],
  'post-construction-cleaning': [
    { title: 'Site coordination', description: 'We sync with builders and designers to identify sensitive finishes and snag-list hotspots.' },
    { title: 'Debris removal', description: 'Specialists vacuum ducts, polish window frames, and clear fine dust using HEPA extraction and tack cloths.' },
    { title: 'Detail finishing', description: 'Surfaces are buffed, fixtures degreased, and protective films removed for flawless inspections.' },
    { title: 'Handover documentation', description: 'We deliver a photographic report and maintenance plan for the first 30 days of occupancy.' },
  ],
  'carpet-upholstery': [
    { title: 'Fiber analysis', description: 'Technicians inspect fiber blends, dye stability, and traffic wear to choose chemistry and equipment.' },
    { title: 'Precision pretreat', description: 'Stains are charted, emulsified, and groomed before hot-water extraction begins.' },
    { title: 'Deep extraction', description: 'Truckmount or low-moisture systems lift soils while protecting weave integrity and backing adhesives.' },
    { title: 'Post-care briefing', description: 'You receive dry-time guidance, protector options, and maintenance cadence for longer fabric life.' },
  ],
  'window-cleaning': [
    { title: 'Access planning', description: 'We chart interior/exterior access, safety anchors, and speciality glass coatings.' },
    { title: 'Prep & safety', description: 'Frames are dusted, tracks vacuumed, and harness or water-fed systems staged.' },
    { title: 'Crystal clear finish', description: 'Pure water polishing and lint-free detailing deliver streak-free glass inside and out.' },
    { title: 'Spotless handoff', description: 'Sills are dried, hardware polished, and progress logged for facilities teams.' },
  ],
  'janitorial-commercial': [
    { title: 'Blueprint design', description: 'We map shift schedules, security protocols, and critical zones with your facilities team.' },
    { title: 'Mobilization', description: 'Cross-trained crews arrive with electrostatic, microfiber, and waste-stream kits staged per floor.' },
    { title: 'Operational execution', description: 'Nightly programs restore lobbies, workstations, restrooms, and amenity areas to presentation standard.' },
    { title: 'Insights & metrics', description: 'Supervisors send KPI dashboards covering attendance, consumables, and enhancement ideas.' },
  ],
  'light-commercial': [
    { title: 'Profile intake', description: 'We align service windows, client traffic, and brand touchpoints for boutiques and studios.' },
    { title: 'Staging & prep', description: 'Display cases, POS hardware, and specialty flooring receive pre-clean protection.' },
    { title: 'Boutique detail', description: 'Technicians polish glass, refresh scenting, and ensure merchandising feels newly opened.' },
    { title: 'Close-out memo', description: 'Managers receive same-night notes with supply top-ups and upcoming promo support ideas.' },
  ],
  'apartment-condo': [
    { title: 'Whiteboard session', description: 'We coordinate with property managers on amenity spaces, elevators, and resident move schedules.' },
    { title: 'Smart prep', description: 'Teams split between common areas and units, staging color-coded supplies and dilution control.' },
    { title: 'Community sparkle', description: 'Lobbies, gyms, lounges, and hallways get hotel-level detailing that impresses residents and prospects.' },
    { title: 'Resident feedback loop', description: 'Concierge desk receives summary notes plus QR-ready feedback prompts for residents.' },
  ],
  'post-event-refresh': [
    { title: 'Event debrief', description: 'We review floor plans, vendor list, and timeline with planners for a controlled teardown.' },
    { title: 'Rapid strike', description: 'Crews collect rentals, triage spills, and sort waste streams while guests exit.' },
    { title: 'Luxury reset', description: 'Floors, restrooms, and lounges are restored with boutique amenity staging and neutralized scents.' },
    { title: 'Morning readiness', description: 'Venue managers receive photo documentation and recommendations for final walkthroughs.' },
  ],
}
