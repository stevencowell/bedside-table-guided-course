import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");

const modules = [
  {
    id: "weeks1-2",
    weeks: "Weeks 1-2",
    title: "Brief, safety and design planning",
    stage: "Start the project",
    summary:
      "Interpret the project brief, work safely and plan a practical bedside table before timber is cut.",
    focus: [
      "Read the brief",
      "Manage workshop risks",
      "Develop a design direction",
    ],
    theory: [
      [
        "Project brief and success criteria",
        "The project brief is to design and manufacture a timber bedside table that is stable, functional, accurately made and suitable for everyday use. The finished table should safely support common bedside items, such as a lamp, book or phone, while fitting the intended style and purpose. Success depends on more than appearance. Components must be marked out carefully, cut to the planned shape, joined securely and assembled square. Edges should be smooth, surfaces evenly prepared and the finish applied without runs, missed areas or heavy sanding scratches. Drawers, shelves or other features included in the approved design must operate correctly and align neatly. Throughout construction, check measurements against the working drawing before cutting, label parts to prevent mix-ups and complete dry fits before using adhesive. Final quality checks should include stability on a flat surface, consistent gaps, flush joints, safe edges and a finish that protects the timber. A successful project matches the approved design and shows careful workmanship.",
      ],
      [
        "Workshop safety and risk controls",
        "Building a tapered-leg bedside table involves hazards during marking, cutting, sanding and assembly. Keep the work area clear, wear enclosed shoes and eye protection, and secure loose hair, clothing and jewellery before using tools or machinery. During marking, support long timber fully and keep sharp pencils, marking knives and squares under control to avoid slips. Tapered legs must be marked from clear reference faces so waste is removed from the correct side. Before cutting, inspect timber for defects, confirm the machine guard and extraction are operating, and keep hands outside the cutting zone. Use push sticks, fences and clamps where required, and never remove offcuts while a blade is moving. Sanding creates fine dust, so use extraction and a suitable dust mask, and keep fingers clear of moving abrasives. During dry fitting and assembly, clamp components securely, wipe excess adhesive promptly and avoid over-tightening, which can distort the frame or drawer opening. Check stability before releasing clamps or moving the project.",
      ],
      [
        "Reading the drawing and planning the build",
        "The approved working drawing is the main guide for building the bedside table. Read all views carefully before marking timber so you understand how the tapered legs, shaped front apron, rails, top and drawer area relate to one another. Use the drawing to identify each part, its position, orientation and finished shape. Pay close attention to front, side and plan views because one view may show information that is not clear in another. Check which faces and edges will be visible, which parts must match as pairs and where tapers or shaped sections begin and finish. Mark components from a consistent reference face and reference edge so small errors do not build up across the project. Plan a sensible construction sequence before cutting, including timber preparation, marking, shaping, joinery, dry fitting, drawer fitting and final assembly. Recheck each part against the drawing before removing material. Once timber is cut away, it cannot be put back.",
      ],
    ],
    quality: "the table meets the brief for storage, stability and proportion",
    safety: "identify hazards and apply the relevant SOP before using tools",
    evidence: "brief notes, concept sketches and a risk-control check",
  },
  {
    id: "weeks3-4",
    weeks: "Weeks 3-4",
    title: "Working drawings, cutting lists and timber preparation",
    stage: "Plan accurately",
    summary:
      "Use drawings and a cutting list to select, prepare and mark timber accurately.",
    focus: ["Read dimensions", "Select suitable timber", "Establish datums"],
    theory: [
      [
        "Working drawings and dimensions",
        "A working drawing communicates the exact information needed to manufacture the approved bedside table. Written dimensions show the finished size and position of each component, so always read the dimension figures rather than estimating from the drawing’s appearance. Use the front, side and plan views together to understand the slim proportions, tapered legs, shaped front apron and the relationship between the table’s parts. A feature that is unclear in one view may be shown accurately in another. Component labels help match each piece to the cutting list and prevent similar rails, aprons or leg parts from being confused. Notes may identify important details such as matching parts, visible faces, grain direction, shaping requirements or the order of operations. Before marking timber, confirm the correct component, reference face and orientation. Check each marked length and position against the drawing before cutting. Careful reading at this stage prevents mismatched parts, reversed tapers and wasted material later.",
      ],
      [
        "Cutting lists and timber selection",
        "A cutting list turns the approved working drawing into a clear record of every timber component needed for the bedside table. Each item should match the drawing’s component labels and include the required finished size, quantity and any shaping notes. Timber is usually cut slightly oversize before dressing so there is enough material to produce straight, square faces and accurate final dimensions. Select boards carefully before marking. Check grain direction, colour and figure so visible parts, such as the top, drawer front and shaped apron, look consistent. Legs and matching rails should be selected as sets where possible so their appearance is balanced. Avoid placing knots, splits, checks, severe grain changes or other defects in joints, tapers or narrow sections where they may weaken the component. Mark defects clearly and plan cuts around them. Confirm the best orientation of each part before cutting to reduce waste and ensure the grain supports both strength and appearance.",
      ],
      [
        "Preparing timber",
        "Prepare timber in a safe, orderly sequence so every component begins straight, square and suitable for accurate marking. A useful sequence is FEWTEL: face, edge, width, thickness, end and length. First, machine one broad surface flat and mark it as the face side. Then produce one straight edge at 90 degrees to that surface and mark it as the face edge. These two datums become the reliable starting points for all later measurements. Use them when marking the slim tapered legs so matching tapers remain consistent, and when setting out the curved front apron so the shape is correctly positioned on the prepared stock. Before machining, inspect each piece for splits, knots, loose grain, twist, bow, cup, embedded material and unsuitable grain direction. Confirm that the board has enough material for dressing and that defects will not remain in joints or shaped areas. Check each stage with a straightedge, square or rule before continuing.",
      ],
    ],
    quality:
      "components are prepared to the correct size from consistent datums",
    safety: "secure timber and follow machine SOPs during preparation",
    evidence: "annotated drawing, cutting list and datum-marked stock",
  },
  {
    id: "weeks5-6",
    weeks: "Weeks 5-6",
    title: "Legs, rails and mortise-and-tenon joinery",
    stage: "Build the structure",
    summary:
      "Mark, cut and test-fit the primary frame joints with control and accuracy.",
    focus: [
      "Mark from datums",
      "Cut controlled joints",
      "Test-fit before glue",
    ],
    theory: [
      [
        "Frame components",
        "The frame supports the thick, slightly overhanging top and keeps the bedside table rigid, square and stable. The slim tapered legs carry the load to the floor, while the rails connect the legs and resist movement. The broad front apron adds strength across the front and provides an important visual feature through its curved lower edge. Matching components should be prepared and marked as pairs so opposite legs, side rails and related parts remain consistent. Keep paired pieces together during machining and check that tapers, lengths and joint positions align before assembly. Label every component clearly with its position, such as front left, rear right or side rail, to prevent parts being reversed or mixed up. Consider grain orientation when selecting and laying out components so narrow sections remain strong and visible surfaces look balanced. Mark joint shoulders from the same face-side and face-edge datums on every part. This reduces accumulated error and helps the frame assemble accurately.",
      ],
      [
        "Mortise-and-tenon joints",
        "Mortise-and-tenon joints suit a tapered-leg bedside table because they create strong, neat connections between the legs, rails and front apron without relying only on screws or nails. The tenon fits into a matching mortise, providing a large gluing area and helping the frame resist twisting and racking. Accurate shoulders are important because they close against the leg and control the final position of the rail. Straight, even cheeks help the tenon fit properly without leaning or binding. Mark and cut with the grain direction in mind so fibres are not weakened or split near the joint. During dry fitting, the tenon should slide into the mortise with firm hand pressure and sit fully against the shoulders. Do not hammer a tight joint, as this may split the leg or damage the tenon. A loose fit can produce a weak joint, while an over-tight fit may scrape away glue and become glue-starved. Trial assemble the frame, then check diagonals, squareness and alignment before gluing.",
      ],
      [
        "Controlled cutting",
        "Controlled cutting means using each machine and hand tool for the task it performs best, while following the workshop SOP and teacher instructions. Before cutting mortises, tapers, rails or the shaped front apron, check machine settings on a test piece from similar timber. On the mortiser, secure the work firmly with clamps, keep guards in place and remove material in small overlapping cuts rather than forcing the chisel. On the bandsaw, adjust the guard close to the timber, keep hands clear of the blade and use push tools where required. Curves and tapers should be cut just outside the marked line so the final shape can be refined safely with a plane, chisel, rasp, file or sanding tool. Always consider grain direction when planing or chiselling, because cutting against the grain can cause splitting or tear-out. Remove waste gradually, maintain a balanced stance and stop if the timber moves, binds or requires excessive force.",
      ],
    ],
    quality: "joint shoulders are clean, square and fitted without gaps",
    safety: "use machine guards, clamps and the correct SOP for each cut",
    evidence: "marked parts, joint test pieces and dry-fit photos",
  },
  {
    id: "weeks7-8",
    weeks: "Weeks 7-8",
    title: "Frame dry fit, adhesives and clamping",
    stage: "Assemble the structure",
    summary:
      "Check the frame before glue-up, then assemble it squarely and safely.",
    focus: ["Dry fit first", "Select adhesive", "Clamp square"],
    theory: [
      [
        "Dry fitting",
        "Dry fitting means assembling the tapered-leg frame without glue so problems can be found and corrected before the joints become permanent. Begin with orderly labels so each rail, leg and apron returns to its planned position and orientation. Assemble the frame in stages, checking each mortise-and-tenon joint for a snug fit that seats fully without being forced. Paired tapered legs must face the correct way and remain consistent in angle and appearance. The broad curved front apron should align cleanly with the front legs, with adjoining faces sitting flush and shoulders closing evenly. Once the main frame is together, check that rails are level, faces are aligned and the structure is not twisted. Measure the two frame diagonals and compare them to confirm squareness. Any tight joint, gap, proud face, misalignment or incorrect orientation must be corrected before adhesive is applied. Never hammer or force a joint into place, as this can split timber or damage accurate shoulders.",
      ],
      [
        "Adhesives",
        "An appropriate timber adhesive must suit the table frame, provide a strong structural bond and allow enough working time for accurate assembly. Before gluing, ensure the mortise-and-tenon surfaces are clean, dry and free from dust, oil or damaged fibres. Rehearse the full assembly without adhesive so the tapered legs, rails and broad curved front apron can be positioned quickly and correctly. Apply a thin, even layer to the joint surfaces, including the tenon cheeks and inside the mortise, without flooding the joint. Too little adhesive can create a glue-starved joint, while too much causes excessive squeeze-out, mess and possible movement during clamping. Work within the adhesive’s open time and assemble in the planned sequence. Remove fresh squeeze-out safely with suitable tools or a damp cloth where appropriate, without spreading glue across visible faces. Keep the frame supported and undisturbed until the adhesive has fully cured before removing clamps, sanding joints or placing stress on the structure.",
      ],
      [
        "Clamping and squareness",
        "A successful glue-up begins with a planned sequence so the tapered legs, rails and shaped front apron are assembled in the correct order before the adhesive begins to set. Clamps should apply firm, even pressure across the joints while keeping the frame aligned. Use pads or cauls between clamp faces and the timber to prevent dents, bruising and local damage. Position clamps so they pull mortise-and-tenon joints together squarely without blocking access to key checks or creating a trip or pinch hazard. While the glue remains workable, confirm that the front apron and rails are correctly located, joint shoulders are closed and adjoining faces remain flush. Compare the frame diagonals to check squareness, then check flatness and look for twist by sighting across the legs and rails. Make adjustments before the adhesive grips. Excessive clamp pressure can distort the frame, force joints out of alignment or squeeze out too much adhesive, weakening the bond.",
      ],
    ],
    quality: "the frame is square, flush and free of visible glue marks",
    safety: "plan the glue-up and keep clamps stable and clear of walkways",
    evidence: "dry-fit check, diagonal measurements and glue-up photos",
  },
  {
    id: "weeks9-10",
    weeks: "Weeks 9-10",
    title: "Drawer or shelf construction and hardware",
    stage: "Build the storage",
    summary:
      "Construct the storage element and fit runners or hardware for reliable movement.",
    focus: ["Plan clearances", "Build square", "Fit hardware accurately"],
    theory: [
      [
        "Storage design",
        "The approved drawing must guide construction because the bedside table may use a drawer, a shelf or another specified storage arrangement. Do not add or change features that are not shown on the plan. Measure each part from reliable frame reference faces rather than from uneven edges, and recheck measurements before cutting. Components must remain square so they fit neatly within the slim tapered-leg frame without pulling it out of alignment. Consider grain orientation when marking and assembling parts, as incorrect direction can weaken components or create poor movement and appearance. Dry fit the storage parts before final assembly, checking that faces align, joints close and clearances are even. A drawer must move smoothly without binding, while a shelf or fixed storage component must sit level and fit its supports correctly. Never force a moving part into place, as this can damage edges, distort the frame or hide an inaccurate fit that should be corrected first.",
      ],
      [
        "Drawer construction",
        "Construct a drawer only when it is shown on the approved plan. Begin from reliable reference faces on the frame and drawer parts so measurements and marks remain consistent. Mark and cut the sides, front and back as a set, keeping matching parts clearly labelled and correctly oriented. During assembly, check that the sides, front and back remain square, that joint faces close neatly and that the two diagonals are equal. The drawer base must be supported as shown on the plan so it sits flat and does not weaken the box. Dry fit the complete drawer before adhesive or final fitting, then test it progressively in the table frame. Remove only small amounts from high or tight areas and recheck often. Never force the drawer into the opening, as this can damage edges, distort the box or hide an alignment problem. If the approved plan uses a fixed shelf instead, apply the same reference-face, squareness, dry-fit and level checks before securing it.",
      ],
      [
        "Hardware and runners",
        "Fit hardware or runners only when they are specified on the approved plan. Begin all layout from reliable reference faces so matching components are positioned consistently on the frame and storage unit. Mark fixing points clearly before drilling, then check their alignment before making any holes. Use the correct pilot-hole technique, clamp the work securely and follow normal tool-safety procedures to prevent splitting, wandering drill bits or damaged surfaces. Fit one component at a time and test the result before continuing. Matching parts must remain parallel and correctly aligned so the drawer or moving section operates smoothly. Tighten fixings firmly, but do not over-tighten them, as this can strip holes, distort components or pull hardware out of position. If movement binds, identify and correct the cause, such as misalignment, uneven clearance or a proud fixing, rather than forcing the part. Where the approved design uses no moving hardware, focus instead on accurate fitting, secure support, level placement and clean fixed joints.",
      ],
    ],
    quality: "the drawer or shelf fits neatly and operates smoothly",
    safety:
      "use pilot holes, clamps and correct tool control when fitting hardware",
    evidence: "component photos, clearance checks and hardware test notes",
  },
  {
    id: "weeks11-12",
    weeks: "Weeks 11-12",
    title: "Top, hardware and timber movement",
    stage: "Complete the build",
    summary:
      "Fit the top and hardware while allowing for accurate alignment and seasonal movement.",
    focus: ["Fit the top accurately", "Allow movement", "Check stability"],
    theory: [
      [
        "Top and timber movement",
        "The thick solid-timber top should be fitted so it sits flat, centred and slightly overhangs the slim tapered-leg frame as shown on the approved drawing. Measure the overhang from one consistent reference face, then compare both sides and ends before fixing anything. Prepare the top edges carefully so they are straight, smooth and free from damage, while keeping the corners and profile consistent with the design. Solid timber expands and contracts mainly across the grain as moisture conditions change. The fixing method must therefore hold the top securely while still allowing this natural movement. A rigid fixing across the grain can restrict movement and may cause the top to split, cup or distort, or place stress on the frame below. Before final fitting, check that the top makes even contact with the supporting frame, does not rock and remains aligned with the tapered legs and apron. Recheck centring and overhang after tightening the fixings.",
      ],
      [
        "Timber movement and fixing method",
        "Grain direction determines how a solid timber top responds to seasonal moisture changes. Timber moves most across the grain as it absorbs or releases moisture, while movement along the grain is much smaller. If the top is restrained rigidly across its width, this natural movement can cause splitting, cupping, distortion or stress in the tapered-leg frame. The approved plan’s movement allowance must therefore be followed exactly rather than replaced with a tighter fixing method. Before final tightening, confirm that the grain direction is understood, the top is correctly positioned, the frame contact points are even and nothing is preventing movement. Tighten progressively while checking that the top remains stable and the frame does not twist. If the top rocks, identify high contact points, loose joints or an uneven frame before altering the top. If it cups or sits unevenly, check moisture-related distortion, incorrect restraint and uneven support. Do not force the top flat with excessive fixing pressure.",
      ],
      [
        "Final hardware checks",
        "Complete a final inspection of only the hardware shown on the approved plan. Check that each item is correctly positioned, aligned and sitting neatly against the timber. Fixings should be secure, with no looseness, movement or gaps around the fitting. Where the hardware is designed to move, operate it several times and confirm that the action is smooth, controlled and free from binding. If an adjustment is required, mark the correct position, use a pilot hole where specified, and control the screwdriver or drill so the bit stays centred and does not damage the screw head or surrounding surface. Check that no metal sits proud of the timber and that there are no sharp edges or projections that could catch clothing or injure the user. Correcting a loose or misaligned fitting does not mean tightening it as hard as possible. Over-tightening can strip the hole, crush timber fibres or distort the hardware. On the completed slim tapered-leg bedside table, careful hardware checks support safe use and a clean, professional finish.",
      ],
    ],
    quality:
      "the top is aligned, stable and fitted without restricting timber movement",
    safety: "support the table securely when drilling or fixing hardware",
    evidence:
      "top alignment checks, hardware layout and completed assembly photos",
  },
  {
    id: "weeks13-14",
    weeks: "Weeks 13-14",
    title: "Surface preparation and defect repair",
    stage: "Prepare the finish",
    summary:
      "Create an even, clean surface before applying a protective finish.",
    focus: ["Sand in sequence", "Repair carefully", "Inspect under light"],
    theory: [
      [
        "Surface preparation",
        "Before applying a finish, inspect the completed tapered-leg bedside table under strong, even light. Look across each surface at a low angle to reveal scratches, glue marks, dents, uneven areas and machining lines. Sand in a controlled sequence, moving gradually from surface correction to final smoothing without skipping stages. Work with the grain on the top, rails, legs and apron to avoid visible cross-grain scratches. Protect crisp edges and joint lines by using light pressure and avoiding excessive sanding near corners, shoulders and fitted joints. The curved front apron should be sanded evenly with suitable support so its shape is maintained rather than flattened or rounded irregularly. End grain may require extra care because it absorbs finish differently and can remain visibly rough. Do not round over joinery or soften details that define the slim tapered-leg form. Use required PPE and dust extraction, then remove all sanding dust from surfaces, corners and joints. Careful preparation determines whether the final finish appears smooth, even and professional.",
      ],
      [
        "Defect repair",
        "Inspect the completed slim tapered-leg bedside table under strong, even light before any finish is applied. View surfaces from different angles to identify glue marks, small gaps, dents, tear-out and scratches that may become more visible after finishing. Decide whether each defect needs removal, blending or careful repair, based on the timber, the size of the defect and its location. A repair suitable for a hidden area may look unacceptable on the tabletop, front apron or a visible leg. Where sensible, test the method on a matching offcut to check colour, texture and how the repair responds to sanding. Remove glue marks fully rather than sanding them into the surface. Avoid excessive sanding, poorly matched patches or heavy-handed repairs that create a larger, lighter or uneven area. Small defects should not be “fixed” in a way that draws more attention to them. Ask the teacher before cutting, reshaping or significantly sanding any visible component, especially where the repair could alter the table’s lines, joinery or tapered form.",
      ],
      [
        "Inspection before finishing",
        "Complete a systematic inspection of the slim tapered-leg bedside table before any finish is applied. Use raking light across each surface so scratches, dents, glue residue, uneven sanding and tear-out cast visible shadows. Check the thick top, tapered legs, rails, curved front apron and joint lines in a consistent order, then run clean fingertips lightly over the timber to detect faults that may not be obvious by sight. Distinguish surface issues, such as scratches or rough grain, from structural issues, such as movement, open joints or parts sitting out of alignment. Surface faults may be corrected through careful preparation, while structural concerns must be checked before further sanding or finishing. Record each issue and the repair decision so work is deliberate rather than repeated or excessive. Stop and seek teacher advice before making any adjustment that could alter the approved shape, reduce a component, soften a joint line or affect the fit of a joint.",
      ],
    ],
    quality:
      "surfaces are even, smooth and free of glue, scratches and obvious defects",
    safety: "control dust and wear the required PPE during sanding",
    evidence: "before-and-after surface photos and a sanding record",
  },
  {
    id: "weeks15-16",
    weeks: "Weeks 15-16",
    title: "Finishing, chemical safety and sustainability",
    stage: "Protect and present",
    summary:
      "Select and apply a finish safely while managing materials and waste responsibly.",
    focus: ["Choose the finish", "Read the SDS", "Apply controlled coats"],
    theory: [
      [
        "Applying a timber finish",
        "Apply only the teacher-approved finish system and follow the product instructions provided in the workshop. Before starting, prepare a clean, well-ventilated and dust-free area so loose particles do not settle into the surface. Check that the bedside table is fully sanded, clean and free from pencil marks, glue residue and handling dirt. Where appropriate, test the finish on a matching offcut to confirm the appearance and application method. Apply the finish evenly with the grain, maintaining a controlled amount of product on the applicator. Work methodically across the thick top, tapered legs, rails and curved front apron. Check edges, corners and undersides for missed areas, and watch vertical surfaces closely for runs or build-up. Between coats, handle the table only as instructed, keep hands clean and avoid placing it on surfaces that may mark the finish. Complete any approved preparation before recoating. Allow each stage to dry and cure patiently, because early handling can damage an otherwise successful finish.",
      ],
      [
        "Chemical safety",
        "Before applying the approved timber finish, read the supplied product label and Safety Data Sheet (SDS) so you understand the hazards, required controls and emergency information. Work only in the teacher-approved finishing area with suitable ventilation, and wear the approved personal protective equipment identified for the product and task. Keep the finish away from flames, sparks, hot surfaces and other ignition sources. Avoid skin and eye contact by handling containers, applicators and the bedside table carefully, especially when coating the thick top, tapered legs and curved front apron. Keep containers closed when not in use, use only the amount needed, and return materials to the approved storage location after the lesson. Never mix, transfer or dispose of finishing materials unless directed by the teacher. Report any spill immediately and follow the teacher’s instructions rather than attempting an unapproved clean-up. Used rags must be placed in the designated safe container because residue may create a fire risk if rags are left folded, piled or discarded incorrectly.",
      ],
      [
        "Sustainable practice",
        "Sustainable practice during finishing and final work means using materials carefully while still achieving a safe, durable and high-quality bedside table. Before applying the approved finish, plan the quantity needed for the thick top, tapered legs, rails and curved front apron so excess material is not prepared or wasted. Keep useful offcuts clean, dry and protected, as they may be suitable for testing the finish, supporting parts or future workshop projects. Careful inspection and patient workmanship reduce unnecessary sanding, repeated coating and rework, which saves time, abrasives, finish and timber. Apply only the amount of approved finish required by the product instructions and teacher guidance, rather than assuming that more will improve the result. Dispose of dust, used application materials, containers and other waste according to workshop instructions, because different materials may require different handling. Final decisions should balance appearance and accuracy with safety, cost and environmental impact. A well-made slim tapered-leg table should meet the brief without consuming more resources than necessary.",
      ],
    ],
    quality:
      "the finish is even, fully cured and appropriate for the table's use",
    safety: "read the SDS and follow ventilation, PPE and rag-disposal rules",
    evidence: "finish test, SDS notes and completed coat record",
  },
  {
    id: "weeks17-18",
    weeks: "Weeks 17-18",
    title: "Quality checks, evidence and evaluation",
    stage: "Check and document",
    summary:
      "Use evidence to judge the quality of the table and explain any improvements made.",
    focus: ["Measure quality", "Photograph evidence", "Evaluate honestly"],
    theory: [
      [
        "Quality checks",
        "A final quality check should compare the completed bedside table with the approved drawing and success criteria, using clear evidence rather than general impressions. Place the table on a flat surface and check that it stands firmly without rocking. Confirm that the frame is square, joints are fully fitted and joint lines are neat, with no visible gaps or movement. Compare the tapered legs from several angles to check that their shape and orientation are consistent. Inspect the thick top for correct alignment, even overhangs where shown on the drawing and secure fitting. Check that the curved front apron follows the approved shape smoothly and is free from uneven transitions. Test storage components or hardware only where they are included in the approved design, confirming safe and reliable operation. Examine the finish under good light for runs, missed areas, scratches or uneven surfaces. All edges must be safe to handle. Record any remaining issues honestly, including their location, likely cause and effect on the final result.",
      ],
      [
        "Collecting evidence",
        "Evidence for the completed bedside table should be clear, purposeful and directly linked to the approved success criteria. Take well-framed photographs that show the overall table and important construction details, including the tapered legs, thick top, curved front apron, joint fit and finish quality. Include any approved storage feature only when it is part of the completed design. Each image should have a brief caption explaining what it proves, such as consistent leg tapers, correct top alignment, smooth apron shaping or neat joint lines. Record relevant measurements and checks where they provide useful evidence of accuracy, squareness, stability or alignment. Photograph the table in a safe, tidy area with tools, leads and waste removed from the background. Use good lighting and angles that reveal workmanship honestly rather than hiding defects. Select the strongest evidence for each success criterion and avoid decorative, repetitive or nearly identical photographs. A smaller set of useful images is more valuable than many photos that provide no new information.",
      ],
      [
        "Evaluation",
        "An evaluation is an honest judgement of how successfully the completed bedside table meets the design brief and approved success criteria. Use evidence from photographs, measurements, quality checks and workshop observations rather than vague statements such as “it looks good”. Compare the final table with the approved drawing, considering the consistency of the tapered legs, alignment of the thick top, shape of the curved front apron, joint fit and finish quality. Discuss any approved storage feature only if it is part of the design. Identify clear strengths and explain why they were successful. Also record limitations honestly, including where the result differs from the plan or could be improved. Explain the likely cause of each issue, such as inaccurate marking, uneven sanding, poor clamping or rushed finishing. Finish by proposing one specific and realistic improvement that could be made if the project were completed again. A strong evaluation is balanced, evidence-based and focused on improving future workmanship.",
      ],
    ],
    quality: "the evaluation is supported by clear, relevant evidence",
    safety:
      "maintain a tidy, safe workspace while photographing and checking the project",
    evidence: "quality-check table, annotated photos and evaluation notes",
  },
  {
    id: "weeks19-20",
    weeks: "Weeks 19-20",
    title: "Final presentation, submission and reflection",
    stage: "Complete and reflect",
    summary:
      "Present the completed table, submit the evidence and reflect on the full project process.",
    focus: ["Present clearly", "Submit evidence", "Reflect on learning"],
    theory: [
      [
        "Final presentation",
        "Final presentation prepares the completed bedside table for teacher inspection without disguising faults or changing the approved design. Clean the table safely using the method directed in the workshop, removing dust, loose debris and handling marks without damaging the finish. Inspect the thick top for alignment and secure fitting, check that the tapered legs are consistent and stable, and confirm that the curved front apron matches the approved shape. Examine joints for neat fit and movement, review the finish under good light, and ensure all exposed edges are safe to handle. Test storage components or hardware only where they appear in the approved design. Place the table on a stable, level surface so its proportions, workmanship and stability can be inspected clearly. Prepare concise evidence labels that identify important features, checks and outcomes without repeating the full folio. Good presentation highlights the work accurately; it does not use props, camera angles or temporary adjustments to hide defects that should be recorded honestly.",
      ],
      [
        "Submission",
        "Final submission should present a complete and organised record of the guided-course evidence that supports the finished bedside table. Check that the student name and class are correct on all submitted work. Confirm that each required module PDF is complete, readable and saved with a clear file name. Where required, include a folio backup or export so the evidence is not lost or left only on one device. Select clear final photographs that show the completed slim tapered-leg table, including important details such as the top, legs, curved front apron, joints, finish and any approved storage feature. Make sure all digital evidence matches the approved project and reflects the work actually completed in the workshop. Remove duplicate files, temporary versions and incomplete drafts before uploading or handing in the final submission. The website evidence should explain decisions, processes, checks and results, but it does not replace the practical project. The completed table remains the main evidence of workmanship, accuracy and safe workshop practice.",
      ],
      [
        "Reflection and workshop reset",
        "Reflection should consider the skills, decisions, safety practices and quality achieved across the full bedside table project. Use evidence from the completed slim tapered-leg table to identify what improved during construction and what still needs development. Consider the accuracy of the tapered legs, top alignment, curved front apron, joint fit, surface preparation and finish where these were part of the approved design. Record one specific learning point, such as a marking, shaping, assembly or finishing technique that became more reliable through practice. Then identify one realistic improvement for a future project and explain how it would lead to safer, more accurate or more efficient work. Reflection is followed by a responsible workshop reset. Return tools and equipment to their correct locations, clean benches and work areas, and sort reusable offcuts and waste according to workshop direction. Leave floors, machines and shared spaces clear and safe so the next group can begin work without avoidable hazards or delays.",
      ],
    ],
    quality:
      "the final submission is complete, clearly presented and linked to the project brief",
    safety: "complete the final clean-up and return tools and materials safely",
    evidence: "final photos, submitted PDF or folio backup and reflection",
  },
];

const escape = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ],
  );

const moduleVisuals = {
  "weeks1-2": ["../assets/workshop/safety-glasses.jpg", "Safety glasses are one part of the workshop controls used before starting the project."],
  "weeks3-4": ["../assets/workshop/combination-square.jpg", "A combination square supports consistent measurement and accurate mark-out from datum edges."],
  "weeks5-6": ["../assets/workshop/mortise-and-tenon.jpg", "A mortise-and-tenon joint provides a strong, accurate connection between frame parts."],
  "weeks7-8": ["../assets/workshop/g-clamp.jpg", "A G-clamp applies controlled pressure during a planned glue-up."],
  "weeks9-10": ["../assets/folio/cards/08-storage.png", "Drawer or approved storage component with clearance checks."],
  "weeks11-12": ["../assets/folio/cards/09-top.png", "Top fitting and a fixing method that allows timber movement."],
  "weeks13-14": ["../assets/workshop/hand-plane.jpeg", "A hand-plane can refine a timber surface carefully before final sanding."],
  "weeks15-16": ["../assets/folio/cards/03-whs.png", "Safe workshop controls while applying the approved finish."],
  "weeks17-18": ["../assets/folio/cards/11-problem-solving.png", "A practical check-fix-improve routine for quality issues."],
  "weeks19-20": ["../assets/folio/cards/12-final-evaluation.png", "Final evaluation against success criteria and evidence collected."],
};

// ChatGPT has supplied the teaching content.  This formatter only improves
// readability: it breaks its longer sections into short classroom paragraphs
// and surfaces the existing opening idea in a consistent callout.
function formatTheoryCopy(text) {
  const sentences = text.match(/[^.!?]+[.!?]+(?:\s+|$)/g) || [text];
  const paragraphs = [];
  for (let index = 0; index < sentences.length; index += 3) {
    paragraphs.push(sentences.slice(index, index + 3).join(" ").trim());
  }
  return paragraphs
    .filter(Boolean)
    .map((paragraph) => `<p>${escape(paragraph)}</p>`)
    .join("");
}

function theoryKeyIdea(text) {
  const firstSentence = (text.match(/[^.!?]+[.!?]+/) || [text])[0].trim();
  return `<div class="callout key-idea"><div class="callout-icon">K</div><div><strong>Key idea:</strong> ${escape(firstSentence)}</div></div>`;
}

const questionSet = (module) => [
  {
    question: `What is the best way to begin ${module.title.toLowerCase()}?`,
    options: [
      "Rely on memory and start immediately",
      `Read the relevant plans, checks and procedure before starting`,
      `Copy another student without checking the project`,
      `Skip the quality check to save time`,
    ],
    correct: 1,
    hint: "Start from reliable project information and the required process.",
    strongHint:
      "A careful start prevents errors that are difficult to repair later.",
    feedback: [
      "Memory can miss a project-specific requirement.",
      "Correct: begin with reliable information, the planned sequence and the relevant checks.",
      "Another student's work is not a substitute for understanding the requirement.",
      "Skipping checks usually creates rework, not saved time.",
    ],
  },
  {
    question: `Which result best demonstrates that ${module.quality}?`,
    options: [
      "The work was rushed to finish early",
      "The result can be checked against the drawing, brief or test",
      "The timber was chosen only because it was closest",
      "No evidence was recorded",
    ],
    correct: 1,
    hint: "Quality needs evidence that can be checked.",
    strongHint:
      "Ask which answer gives a reliable comparison with the intended result.",
    feedback: [
      "Speed alone does not prove quality.",
      "Correct: evidence and comparison make quality visible and defensible.",
      "Convenience does not prove suitability.",
      "Without evidence, it is difficult to show what was achieved.",
    ],
  },
  {
    question: `Which safety approach is most appropriate while you ${module.safety.toLowerCase()}?`,
    options: [
      "Wait until something goes wrong before checking controls",
      "Plan the task, follow the SOP and use the required controls",
      "Use a machine without checking the setup",
      "Assume PPE replaces every other control",
    ],
    correct: 1,
    hint: "Safety is planned before work starts.",
    strongHint: "PPE is important, but it is not the only control.",
    feedback: [
      "Controls are most effective when planned before exposure to the hazard.",
      "Correct: use the planned procedure, correct setup and required controls.",
      "Unsafe setup can create risk before the cut or operation starts.",
      "PPE supports controls; it does not replace planning, guards or secure work.",
    ],
  },
  {
    question: `Which evidence would be most useful for this module?`,
    options: [
      "A photo with no explanation",
      module.evidence,
      "A guess about what happened",
      "An unrelated image from the internet",
    ],
    correct: 1,
    hint: "Useful evidence should prove the stage you completed.",
    strongHint:
      "Choose the option that is specific, relevant and can be explained.",
    feedback: [
      "A photo needs context to show what it proves.",
      "Correct: this evidence directly supports the work and explanation for the module.",
      "Evidence should record what actually happened, not an assumption.",
      "Only your own relevant project evidence should be submitted.",
    ],
  },
];

const writtenSet = (module) => [
  {
    title: `1. Explain the key decision in ${module.title}`,
    prompt: `Explain how you would approach ${module.title.toLowerCase()} and why that approach is reliable. Refer to quality, safety and the project brief.`,
    minWords: 15,
    concepts: [
      {
        label: "project requirement",
        terms: ["brief", "drawing", "plan", "requirement"],
      },
      {
        label: "quality check",
        terms: ["check", "accurate", "quality", "fit", "square", "surface"],
      },
      {
        label: "safe process",
        terms: ["safe", "sop", "ppe", "control", "risk"],
      },
    ],
    scaffold: [
      "First, I would check the project requirement by...",
      "To achieve quality, I would...",
      "To work safely, I would...",
    ],
    prompts: [
      "Name the drawing, brief or procedure you would start from.",
      "Explain how you would check the quality of the work.",
      "Include a specific safe-work control.",
    ],
    model: `I would begin by checking the relevant drawing, brief and workshop procedure before setting up the task. I would work from consistent reference information, complete a small check before committing to the final work, and compare the result with the intended requirement. I would follow the relevant SOP, secure the work where needed and use the required PPE. This makes the process safer and reduces the chance of rework.`,
  },
  {
    title: `2. Evaluate evidence for ${module.title}`,
    prompt: `Describe what evidence you would collect for this stage and explain what it proves about your bedside table project.`,
    minWords: 15,
    concepts: [
      {
        label: "specific evidence",
        terms: ["photo", "measurement", "drawing", "record", "check"],
      },
      {
        label: "what it proves",
        terms: ["shows", "proves", "demonstrates", "confirms"],
      },
      {
        label: "quality or improvement",
        terms: ["quality", "accurate", "improve", "adjust", "fit"],
      },
    ],
    scaffold: [
      "I would collect...",
      "This evidence would show...",
      "If I found a problem, I would...",
    ],
    prompts: [
      "Name a photo, measurement, drawing annotation or check you would collect.",
      "Explain what the evidence proves.",
      "State what you would do if the check identified a problem.",
    ],
    model: `I would collect a clear photo or measurement record from the actual project stage, together with a short note explaining what it shows. For example, I could record the relevant dimensions, fit, surface condition or hardware movement. This evidence would confirm whether the work meets the drawing and quality expectation. If the check showed a problem, I would identify the cause, make a controlled adjustment and record the result.`,
  },
];

function modulePage(module, index) {
  const next = modules[index + 1];
  const previous = modules[index - 1];
  const visual = moduleVisuals[module.id];
  const theory = module.theory
    .map(
      (section, theoryIndex) => {
        const showVisual = theoryIndex === 1 && visual;
        const visualCard = showVisual
          ? `<figure class="lesson-support-visual"><img src="${visual[0]}" alt="${escape(visual[1])}" loading="lazy" decoding="async"><figcaption>${escape(visual[1])}</figcaption></figure>`
          : "";
        return `<section class="card textbook-section" id="theory-${theoryIndex + 1}"><p class="section-kicker">Theory ${theoryIndex + 1}</p><h2>${escape(section[0])}</h2><div class="theory-layout${showVisual ? " has-visual" : ""}"><div class="theory-copy">${formatTheoryCopy(section[1])}</div>${visualCard}</div>${theoryKeyIdea(section[1])}<div class="callout coach"><div class="callout-icon">?</div><div><strong>Workshop checkpoint:</strong> Record one decision or check from this part of the build in your project evidence.</div></div></section>`;
      },
    )
    .join("\n");
  return `<!doctype html><html lang="en-AU"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description" content="${escape(module.weeks)} guided learning for the Bedside Table timber project."><title>Bedside Table - ${escape(module.weeks)} Guided Lesson</title><link rel="stylesheet" href="../styles/course.css"></head><body><a class="skip-link" href="#main-content">Skip to lesson</a><div class="course-bar screen-only"><div class="course-bar-inner"><a class="course-brand" href="../index.html">Bedside Table Guided Course</a><nav class="course-links" aria-label="Course navigation"><a href="../index.html">Home</a><a class="active" aria-current="page" href="index.html">${escape(module.weeks)}</a></nav></div></div><header class="hero lesson-hero"><div class="hero-inner"><div class="hero-copy"><p class="eyebrow">Industrial Technology - Timber</p><h1>${escape(module.weeks)}</h1><p class="hero-subtitle">${escape(module.weeks)}: ${escape(module.title)}</p></div><img class="hero-chair" src="../assets/bedside-table.png" alt="Completed timber bedside table"></div></header><main id="main-content"><section class="student-strip card" aria-labelledby="student-details-title"><div><p class="section-kicker">Your work</p><h2 id="student-details-title">Student details</h2><p class="muted">Your entries save automatically in this browser. Use <strong>Print / Save PDF</strong> before leaving the page.</p></div><div class="student-fields"><label><span>First name</span><input id="student-first-name" type="text" autocomplete="given-name" placeholder="First name"></label><label><span>Last name</span><input id="student-last-name" type="text" autocomplete="family-name" placeholder="Last name"></label><label><span>Class</span><input id="student-class" type="text" placeholder="e.g. 10 Timber"></label></div><div class="save-status" id="save-status" role="status" aria-live="polite">Ready</div></section><section class="lesson-overview card"><div class="overview-heading"><div><p class="section-kicker">${escape(module.weeks)}</p><h2>This module</h2></div><div class="time-badge">Two weeks</div></div><p class="module-summary">${escape(module.summary)}</p><div class="module-focus">${module.focus.map((item) => `<div><strong>${escape(item)}</strong><span>Use the planned sequence and record useful evidence as you work.</span></div>`).join("")}</div></section><nav class="lesson-nav card screen-only" aria-label="Lesson sections"><a href="#theory-1">Theory</a><a href="#theory-2">Workshop focus</a><a href="#theory-3">Quality check</a><a href="#knowledge-checks">Guided checks</a><a href="#written-application">Written responses</a></nav><div class="part-banner"><h2>${escape(module.stage)}</h2><p>${escape(module.summary)}</p></div>${theory}<section class="card textbook-section"><p class="section-kicker">Core project resource</p><h2>Bedside Table project plans</h2><p>Use the supplied drawing as the controlling source for dimensions and construction details. Do not scale the on-screen image.</p><a class="button-link secondary" href="../Bedside-Table-Project-Plans.pdf" target="_blank" rel="noopener">Open project plans</a></section><section class="card activity-section" id="knowledge-checks"><div class="activity-heading"><div><p class="section-kicker">Guided practice</p><h2>${escape(module.weeks)} knowledge checks</h2><p class="muted">Choose an answer, check it and use feedback to improve. The hint becomes more specific after an incorrect attempt.</p></div><div class="progress-ring" aria-label="Knowledge check progress"><strong id="mc-progress-number">0/4</strong><span>mastered</span></div></div><div class="question-list" id="mc-questions"></div></section><section class="card activity-section" id="written-application"><div class="activity-heading"><div><p class="section-kicker">Apply your learning</p><h2>Scaffolded written responses</h2><p class="muted">Write a genuine short answer first, then use the feedback and model response to improve it.</p></div><div class="progress-ring written" aria-label="Written response progress"><strong id="written-progress-number">0/2</strong><span>reviewed</span></div></div><div class="written-list" id="written-questions"></div></section><section class="card completion-card"><div><p class="section-kicker">Finish the two-week block</p><h2>Save your evidence</h2><p>Download this completed module as a PDF before changing devices or clearing browser data.</p></div><div class="completion-summary"><div><span>Knowledge checks</span><strong id="summary-mc">0/4</strong></div><div><span>Written responses reviewed</span><strong id="summary-written">0/2</strong></div><div><span>Student details</span><strong id="summary-details">Incomplete</strong></div></div><div class="button-row screen-only"><button class="primary-button" id="print-button" type="button">Print / Save PDF</button><button class="secondary-button" id="reset-button" type="button">Reset ${escape(module.weeks)}</button></div><div class="week-switcher screen-only">${previous ? `<a href="../${previous.id}/index.html">&larr; ${escape(previous.weeks)}</a>` : "<span></span>"}${next ? `<a class="next" href="../${next.id}/index.html">${escape(next.weeks)} &rarr;</a>` : '<a class="next" href="../bedside-table-folio.html">Open project folio &rarr;</a>'}</div></section></main><footer><p>Bedside Table Project - ${escape(module.weeks)} Guided Lesson</p><p>Wagga Wagga High School | Industrial Technology - Timber</p></footer><script src="lesson-data.js"></script><script src="../scripts/lesson-engine.js"></script></body></html>`;
}

function lessonData(module) {
  return `window.LESSON_CONFIG=${JSON.stringify({ storageKey: `bedside-table-${module.id}-guided-v1`, resetLabel: module.weeks })};\nwindow.MC_QUESTIONS=${JSON.stringify(questionSet(module), null, 2)};\nwindow.WRITTEN_QUESTIONS=${JSON.stringify(writtenSet(module), null, 2)};\n`;
}

function homePage() {
  const cards = modules
    .map(
      (module) =>
        `<article class="module-card"><div class="status-badge">AVAILABLE</div><h3>${escape(module.weeks)}: ${escape(module.title)}</h3><p>${escape(module.summary)}</p><div class="topic-tags">${module.focus.map((item) => `<span>${escape(item)}</span>`).join("")}</div><a class="button-link" href="${module.id}/index.html">Open ${escape(module.weeks)} &rarr;</a></article>`,
    )
    .join("\n");
  return `<!doctype html><html lang="en-AU"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description" content="Twenty-week Bedside Table guided learning course for Industrial Technology - Timber."><title>Bedside Table Guided Course</title><link rel="stylesheet" href="styles/course.css"></head><body><a class="skip-link" href="#main-content">Skip to main content</a><header class="hero"><div class="hero-inner"><div class="hero-copy"><p class="eyebrow">Industrial Technology - Timber</p><h1>Bedside Table Guided Course</h1><p class="hero-subtitle">A clear, guided pathway from the first drawing to a finished timber bedside table.</p><div class="hero-actions"><a class="button-link" href="weeks1-2/index.html">Begin Weeks 1-2</a><a class="button-link secondary" href="Bedside-Table-Project-Plans.pdf" target="_blank" rel="noopener">Open project plans</a><a class="button-link secondary" href="bedside-table-folio.html">Open project folio</a></div></div><img class="hero-chair" src="assets/bedside-table-hero.png" alt="Completed timber bedside table"></div></header><main id="main-content"><section class="project-section"><div class="section-heading"><div><p class="section-kicker">The project</p><h2>Build a useful bedside table, one reliable stage at a time</h2><p>Use the modules in order. Read and inspect the theory, practise with guided feedback, apply the process in the workshop, then save evidence for submission.</p></div></div><section class="course-routine"><p class="section-kicker">How the course works</p><h3>One predictable routine for every two-week module</h3><p>Students build understanding before answering, then use feedback and model responses to improve their work.</p><div class="routine-grid"><article><strong>1. Read and inspect</strong><span>Study plans, theory, technical diagrams and workshop examples.</span></article><article><strong>2. Practise</strong><span>Complete guided knowledge checks and written responses.</span></article><article><strong>3. Apply</strong><span>Complete each workshop stage carefully, accurately and safely.</span></article><article><strong>4. Review</strong><span>Use checks, evidence and evaluation to improve the finished table.</span></article></div></section><div class="notice"><strong>Student evidence:</strong> Work saves in this browser. Download each completed module as a PDF before changing devices or clearing browser data.</div><div class="phase-grid"><a class="phase-card" href="weeks1-2/index.html"><span class="phase-number">1</span><span class="phase-title">Weeks 1-4: Plan the table</span></a><a class="phase-card" href="weeks5-6/index.html"><span class="phase-number">2</span><span class="phase-title">Weeks 5-10: Build the structure</span></a><a class="phase-card" href="weeks11-12/index.html"><span class="phase-number">3</span><span class="phase-title">Weeks 11-16: Fit and finish</span></a><a class="phase-card" href="weeks17-18/index.html"><span class="phase-number">4</span><span class="phase-title">Weeks 17-20: Check and reflect</span></a></div></section><section class="course-map"><div class="section-heading"><div><p class="section-kicker">Course map</p><h2>Ten modules covering the full twenty-week project</h2></div><div class="time-badge">All modules ready</div></div><div class="module-grid">${cards}</div></section><section class="resource-highlight"><div><p class="section-kicker">Core project resource</p><h2>Bedside Table Project Plans</h2><p>Open the drawing when you need to check components, dimensions and construction details.</p><a class="button-link" href="Bedside-Table-Project-Plans.pdf" target="_blank" rel="noopener">Open project plans</a></div><img src="assets/bedside-table.png" alt="Timber bedside table project"></section><section class="outcomes"><p class="section-kicker">Syllabus outcomes</p><h2>What this project develops</h2><p>Students manage workshop risks, interpret and apply design information, select materials, construct quality timber components and evaluate their finished project.</p></section></main><footer><p>Bedside Table Guided Course</p><p>Wagga Wagga High School | Industrial Technology - Timber</p></footer></body></html>`;
}

// The landing page is maintained as a project-specific source file.  The lesson
// generator must never flatten it back to the older generic template when the
// theory modules are rebuilt.
const landingPagePath = path.join(root, "index.html");
if (!fs.existsSync(landingPagePath)) {
  fs.writeFileSync(landingPagePath, homePage());
}
for (const [index, module] of modules.entries()) {
  const directory = path.join(root, module.id);
  fs.writeFileSync(
    path.join(directory, "index.html"),
    modulePage(module, index),
  );
  fs.writeFileSync(path.join(directory, "lesson-data.js"), lessonData(module));
}
console.log(`Built ${modules.length} Bedside Table guided modules.`);
