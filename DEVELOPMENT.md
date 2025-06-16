# 🚀 Development Guidelines

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables (see `.env.example`)
4. Create your feature branch from `develop`

## Code Style & Standards

### General
- Follow TypeScript best practices
- Use meaningful variable and function names
- Write comments for complex logic
- Keep functions small and focused
- Use async/await for asynchronous operations

### React/React Native
- Use functional components with hooks
- Implement proper error boundaries
- Follow React's best practices for state management
- Use proper prop types and interfaces

### Testing
- Write unit tests for utilities and services
- Write component tests for UI elements
- Maintain minimum 80% test coverage
- Run tests before creating PRs

## Git Workflow

### Branch Naming
```
feature/[initials]/[task-number]-[description]
Example: feature/dn/2.1-styling-system
```

### Commit Messages
```
[type]: [task-number] [description]

[optional body]

Example:
feat: 2.1 implement mobile styling system
```

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: Formatting
- refactor: Code restructuring
- test: Adding tests
- chore: Maintenance

### Pull Requests
1. Create PR from your feature branch to `develop`
2. Fill out PR template
3. Request review from other developer
4. Address review comments
5. Merge only after approval

## Parallel Development Rules

### Mobile Developer (DN)
- Work in `apps/mobile` directory
- Create mobile-specific components
- Handle mobile authentication
- Implement mobile-specific features
- Write mobile tests

### Web Developer
- Work in `apps/web` directory
- Create web-specific components
- Handle web authentication
- Implement web-specific features
- Write web tests

### Shared Development
- Coordinate on shared packages
- Discuss API changes
- Review database schema changes
- Maintain consistent coding standards

## Communication

### Daily Sync
- Brief update on progress
- Discuss blockers
- Coordinate on shared components
- Review API contracts

### Documentation
- Update README.md for new features
- Document API changes
- Keep architecture.md current
- Update tasks.md as items complete

## Critical Paths

### Must Complete First
1. Authentication system
2. Database schema
3. Core shared packages
4. Basic API endpoints

### Can Work in Parallel
- Mobile UI development
- Web UI development
- Mobile-specific features
- Web-specific features
- Testing

## Environment Setup

### Required Tools
- Node.js (v18+)
- npm (v9+)
- Git
- VS Code (recommended)
- iOS Simulator (for mobile dev)
- Android Studio (optional)

### VS Code Extensions
- ESLint
- Prettier
- TypeScript
- React Native Tools
- GitLens

## Troubleshooting

### Common Issues
1. Environment variables not loading
   - Check .env file exists
   - Verify variable names match

2. Build failures
   - Clear node_modules and reinstall
   - Check for conflicting dependencies

3. Mobile build issues
   - Clear Metro bundler cache
   - Reset iOS simulator

### Getting Help
1. Check existing documentation
2. Review recent commits
3. Ask other developer
4. Create issue if needed

## Release Process

1. All tests passing
2. Code review completed
3. Documentation updated
4. Version bumped
5. Changelog updated
6. Merge to main
7. Create release tag
8. Deploy to production 