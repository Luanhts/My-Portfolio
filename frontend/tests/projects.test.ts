import assert from "node:assert/strict";
import test from "node:test";
import { getProject, projects } from "../lib/projects";

test("project slugs are unique and URL-safe", () => {
  const slugs = projects.map((project) => project.slug);

  assert.equal(new Set(slugs).size, slugs.length);
  slugs.forEach((slug) => assert.match(slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/));
});

test("projects contain enough information for their detail pages", () => {
  projects.forEach((project) => {
    assert.ok(project.title.length > 2);
    assert.ok(project.summary.length > 40);
    assert.ok(project.challenge.length > 40);
    assert.ok(project.solution.length > 40);
    assert.ok(project.contributions.length >= 1);
    assert.ok(project.technologies.length >= 1);
    assert.equal(getProject(project.slug), project);
  });
});

test("external project links are valid HTTPS URLs", () => {
  projects.forEach((project) => {
    [project.githubUrl, project.liveUrl].filter(Boolean).forEach((value) => {
      const url = new URL(value as string);

      assert.equal(url.protocol, "https:");
      assert.notEqual(url.hash, "#");
    });
  });
});
