# Content evidence

Reviewed 2026-09-09. Case studies describe inspected implementation, not measured business results or current production usage. Project tests were inspected; the portfolio's own checks were executed separately.

| Project | Evidence behind the case study | Public status |
| --- | --- | --- |
| DispensaMais | Authorization/version checks before stock mutation; tenant-scoped idempotency; linked authorization, batch and stock-event records; integration test scenarios | Private implementation; architecture available for interview discussion |
| RegMais | Allocation preview separated from confirmation; production configuration guards; history-aware deletion; tenant-isolation tests | Private implementation; genuine historical interface capture without patient records |
| Study OS | SQLite backup API and integrity checks; portable archive validation; staged restore, pre-restore backup and rollback; backup/restore tests | Public development revision linked below |
| Bulldog | Authored semantic actions separate from presentation; versioned save validation | Private prototype; audio content incomplete |

Study OS's case study links to the [audited public revision](https://github.com/Razikale365/Diario-Questoes/tree/e26be60fa54c3075c72f23139863d9f296b971c4). Its [portable archive implementation](https://github.com/Razikale365/Diario-Questoes/blob/e26be60fa54c3075c72f23139863d9f296b971c4/study_os_service/db/portable.py) supports the recovery narrative. Recheck the link when updating this case study.

Employment, language proficiency and professional experience are taken from João's existing résumé. Employer code was not inspected; the portfolio does not invent numerical outcomes or claim sole authorship of team work. The LangChain natural-language-to-SQL work is described as a prototype.

The downloadable résumé omits phone number and unverified graduation status. The original tailored documents and detailed local source audit remain outside the publishable tree. There are no patient records, credentials or recruiter correspondence in the site assets.

When changing a claim, inspect the implementation and update its status. Record executed portfolio checks in VERIFICATION.md.
